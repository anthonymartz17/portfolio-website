<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import BaseButton from "@/components/baseButton.vue";

export default {
	components: {
		BaseButton,
	},
	data() {
		return {
			submitted: false,
			user: {},
		};
	},
	validations: {
		user: {
			email: { required, email },
			password: { required },
		},
	},
	mounted() {
		this.$aos.init({
			duration: 800,
			offset: 200,
			// disable: "mobile",
		});
	},
	methods: {
		...mapActions("auth", ["signIn"]),

		async trySignIn() {
			this.$v.$touch;
			this.submitted = true;
			if (this.$v.$invalid) {
				return;
			} else {
				try {
					await this.signIn({
						email: this.user.email,
						password: this.user.password,
					});
					this.user = {};
					this.submitted = false;
					this.$router.push({ name: "home-blog" });
				} catch (error) {
					throw error;
				}
			}
		},
	},
};
</script>
<template>
	<div class="signIn-wrapper">
		<div
			class="signIn-container"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="400"
		>
			<h2 class="page-title">Sign In as Administrator</h2>
			<form action="" @submit.prevent="trySignIn">
				<div class="field">
					<label class="label-field" for="email">Email</label>
					<input
						v-model="user.email"
						type="text"
						id="email"
						:class="[
							'text-thin',
							'input-field',
							{ invalid: submitted && $v.user.email.$invalid },
						]"
					/>
					<p v-if="submitted && !$v.user.email.required" class="text-small">
						Please enter email
					</p>
					<p v-else-if="submitted && !$v.user.email.email" class="text-small">
						Please enter a valid email
					</p>
				</div>
				<div class="field">
					<label class="label-field" for="password">Password</label>
					<input
						v-model="user.password"
						type="text"
						id="password"
						:class="[
							'text-thin',
							'input-field',
							{ invalid: submitted && $v.user.password.$invalid },
						]"
					/>
					<p v-if="submitted && !$v.user.password.required" class="text-small">
						Please enter password
					</p>
				</div>

				<!-- <div class="btn-container"> -->
				<BaseButton icon="write" text="Sign In" size="30" class="custom-btn" />
				<!-- </div> -->
			</form>
		</div>
	</div>
</template>
<style lang="scss" scoped>
/* Custom CSS to display images inline */
.signIn-wrapper {
	background: $bg-1;
	display: grid;
	place-items: 	center;
	height: 100vh;
}
.signIn-container {
	min-width: 20em;
	min-height: 80%;
}

.invalid {
	border: 2px solid $accent !important;
}
.label-field {
	display: block;
	font: $font-text-mb;
	color: $white;
}

.input-field {
	color: $white;
	width: 100%;
	background: none;
	padding: 0.5em;
	border: 1px solid rgba($white, 0.3);
	margin-bottom: 2em;
}

.page-title {
	font: $font-title-mb;
	color: $white;
	margin-bottom: 1em;
	font-size: 1.2em;
}

.custom-btn {
	width: 100%;
}

// .create-post-container {
// 	min-height: 25em;
// 	@include breakpoint(tablet) {
// 		/* Add tablet-specific styles here if needed */
// 	}
// 	@include breakpoint(desktop) {
// 		/* Add desktop-specific styles here if needed */
// 		.custom-btn {
// 			width: 20em;
// 		}
// 		.btn-container {
// 			display: flex;
// 			justify-content: flex-end;
// 			margin-block: 1em;
// 		}
// 	}
// }
</style>
