<script>
export default {
	name: "ConfirmModal",
	model: {
		prop: "value",
		event: "input",
	},
	props: {
		value: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: "Confirm action",
		},
		message: {
			type: String,
			default: "Are you sure you want to continue?",
		},
		cancelText: {
			type: String,
			default: "Cancel",
		},
		confirmText: {
			type: String,
			default: "Confirm",
		},
		confirmLabel: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			previousActiveElement: null,
		};
	},
	computed: {
		titleId() {
			return `confirm-modal-title-${this._uid}`;
		},
		messageId() {
			return `confirm-modal-message-${this._uid}`;
		},
		resolvedConfirmLabel() {
			return this.confirmLabel || this.confirmText;
		},
	},
	watch: {
		value(isOpen) {
			if (isOpen) {
				this.openModal();
			} else {
				this.closeModal();
			}
		},
	},
	mounted() {
		if (this.value) {
			this.openModal();
		}
	},
	beforeDestroy() {
		document.removeEventListener("keydown", this.handleKeydown);
	},
	methods: {
		openModal() {
			this.previousActiveElement = document.activeElement;
			document.addEventListener("keydown", this.handleKeydown);
			this.$nextTick(() => {
				if (this.$refs.cancelButton) {
					this.$refs.cancelButton.focus();
				}
			});
		},
		closeModal() {
			document.removeEventListener("keydown", this.handleKeydown);
			if (
				this.previousActiveElement &&
				typeof this.previousActiveElement.focus === "function"
			) {
				this.previousActiveElement.focus();
			}
		},
		requestClose() {
			this.$emit("input", false);
			this.$emit("cancel");
		},
		confirm() {
			this.$emit("confirm");
		},
		handleKeydown(event) {
			if (!this.value) return;

			if (event.key === "Escape" || event.key === "Esc") {
				event.preventDefault();
				this.requestClose();
				return;
			}

			if (event.key !== "Tab") return;

			const focusableElements = this.getFocusableElements();
			if (!focusableElements.length) return;

			const firstElement = focusableElements[0];
			const lastElement = focusableElements[focusableElements.length - 1];

			if (event.shiftKey && document.activeElement === firstElement) {
				event.preventDefault();
				lastElement.focus();
			} else if (!event.shiftKey && document.activeElement === lastElement) {
				event.preventDefault();
				firstElement.focus();
			}
		},
		getFocusableElements() {
			if (!this.$refs.dialog) return [];

			return Array.from(
				this.$refs.dialog.querySelectorAll(
					'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
				)
			);
		},
	},
};
</script>

<template>
	<transition name="confirm-modal">
		<div
			v-if="value"
			class="confirm-overlay"
			@click.self="requestClose"
		>
			<section
				ref="dialog"
				class="confirm-dialog"
				role="dialog"
				aria-modal="true"
				:aria-labelledby="titleId"
				:aria-describedby="messageId"
				tabindex="-1"
			>
				<div class="confirm-mark" aria-hidden="true">!</div>
				<h2 :id="titleId" class="confirm-title">{{ title }}</h2>
				<p :id="messageId" class="confirm-message">{{ message }}</p>
				<div class="confirm-actions">
					<button
						ref="cancelButton"
						type="button"
						class="confirm-btn confirm-btn-secondary"
						@click="requestClose"
					>
						{{ cancelText }}
					</button>
					<button
						type="button"
						class="confirm-btn confirm-btn-danger"
						:aria-label="resolvedConfirmLabel"
						@click="confirm"
					>
						{{ confirmText }}
					</button>
				</div>
			</section>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
.confirm-overlay {
	position: fixed;
	inset: 0;
	z-index: 2000;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.25rem;
	background: rgba($bg-1, 0.72);
	backdrop-filter: blur(4px);
}

.confirm-dialog {
	width: min(100%, 28rem);
	padding: 1.5rem;
	border: 1px solid rgba($white, 0.16);
	border-radius: 8px;
	background: linear-gradient(145deg, rgba($bg-2-lighter, 0.98), rgba($bg-1, 0.98));
	box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.42);
	color: $white;
	text-align: left;
	outline: none;
}

.confirm-mark {
	display: grid;
	place-items: center;
	width: 2.25rem;
	height: 2.25rem;
	margin-bottom: 1rem;
	border: 1px solid rgba($danger, 0.5);
	border-radius: 50%;
	background: rgba($danger, 0.12);
	color: $danger;
	font: $font-subtitle-mb;
}

.confirm-title {
	margin: 0 0 0.65rem;
	color: $white;
	font: $font-subtitle-mb;
}

.confirm-message {
	margin: 0;
	color: rgba($white, 0.72);
	font: $font-text-mb;
	line-height: 1.55;
}

.confirm-actions {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-end;
	gap: 0.75rem;
	margin-top: 1.5rem;
}

.confirm-btn {
	min-width: 7.5rem;
	padding: 0.75rem 1rem;
	border-radius: 5px;
	font: $font-btn-mb;
	cursor: pointer;
	transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

	&:focus-visible {
		outline: 2px solid rgba($white, 0.85);
		outline-offset: 3px;
	}

	&:hover {
		transform: translateY(-1px);
	}
}

.confirm-btn-secondary {
	border: 1px solid rgba($white, 0.35);
	background: transparent;
	color: $white;
}

.confirm-btn-danger {
	border: 1px solid rgba($danger, 0.8);
	background: $danger;
	color: $white;
}

.confirm-modal-enter-active,
.confirm-modal-leave-active {
	transition: opacity 0.2s ease;

	.confirm-dialog {
		transition: transform 0.2s ease, opacity 0.2s ease;
	}
}

.confirm-modal-enter,
.confirm-modal-leave-to {
	opacity: 0;

	.confirm-dialog {
		opacity: 0;
		transform: scale(0.96) translateY(0.5rem);
	}
}
</style>
