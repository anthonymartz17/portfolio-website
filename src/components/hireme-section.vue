<script>
import BaseButton from "./baseButton.vue";
import basebutton from "./baseButton.vue";
import { required, email } from "vuelidate/lib/validators";
export default {
	components: { BaseButton, basebutton },
	data() {
		return {
			title: "Hire me",
			msg: {},
			isSubmitted: false,
		};
	},
	validations: {
		msg: {
			name: { required },
			email: { required, email },
			msg: { required },
		},
	},
	methods: {
		sendMsg() {
			this.isSubmitted = true;
			this.$v.$touch();
			if (this.$v.$invalid) {
				return;
			} else {
				console.log(this.msg);
				this.isSubmitted = false;
				this.msg = {}
			}
		},
	},
};
</script>
<template>
	<div class="hireme-container">
		<div class="title-icon">
			<h2 class="sections-title-global">
				{{ title }}
			</h2>
			<font-awesome-icon icon="fa-solid fa-handshake" class="icon" />
		</div>
		<p class="text-thin contact-text">
			For any questions, feel free to contact me through any of the methods
			bellow.
		</p>
		<div class="field">
			<label for="name">Name</label>
			<input
				v-model="msg.name"
				type="text"
				id="name"
				autocomplete="off"
				:class="['input-field', { invalid: isSubmitted && $v.msg.name.$error }]"
			/>
			<p v-if="isSubmitted && !$v.msg.name.required" class="text-thin error">
				Please enter a name
			</p>
		</div>
		<div class="field">
			<label for="email">Email</label>
			<input
				v-model="msg.email"
				type="email"
				id="email"
				autocomplete="off"
				:class="['input-field', { invalid: isSubmitted && $v.msg.name.$error }]"
			/>
			<div v-if="isSubmitted && $v.msg.name.$error">
				<p v-if="isSubmitted && !$v.msg.email.required" class="text-thin error">
					Please enter an email
				</p>
				<p
					v-else-if="isSubmitted && !$v.msg.email.email"
					class="text-thin error"
				>
					Please enter a valid email
				</p>
			</div>
		</div>
		<div class="field">
			<label for="email">Message</label>
			<textarea
				v-model="msg.msg"
				name="email"
				id="email"
				cols="30"
				rows="7"
				:class="[
					'textarea-field',
					{ invalid: isSubmitted && $v.msg.msg.$error },
				]"
			></textarea>
			<p v-if="isSubmitted && !$v.msg.msg.required" class="text-thin error">
				Please enter a message
			</p>
		</div>
		<div class="btn-container">
			<BaseButton
				@click.native="sendMsg"
				icon="fa-solid fa-paper-plane"
				text="Send it"
				:iconAccent="true"
			/>
			<font-awesome-icon
				icon="fa-solid fa-message"
				class="msg-bubble"
				size="2x"
			/>
		</div>
		<!-- <div class="popUp-container">
			<div class="chat-box">
				<div class="profile-img"></div>
				<div class="header">
					<p class="text-thin">Antonio Martinez</p>
					<font-awesome-icon icon="fa-solid fa-xmark" class="accent" />
				</div>
				<p class="msg-body text-thin">
					Hey, I'm available to chat in case of any questions
				</p>
				<input type="text" />
			</div>
		</div> -->
	</div>
</template>

<style lang="scss" scoped>
.popUp-container {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	backdrop-filter: blur(5px);
	display: grid;
	place-items: center;
	padding: 1em;
}
.header {
	display: flex;
	margin-left: 3em;
	align-items: center;
	justify-content: space-between;
}
.chat-box {
	position: relative;
	background: $bg-1;
	width: 100%;
	padding: 0.5em;
	border: 1px solid rgba($white, 0.3);
	border-radius: 5px;
	min-height: 13em;
}
.profile-img {
	height: 4em;
	width: 4em;
	border: 1px solid rgba($white, 0.3);
	border-radius: 50px;
	position: absolute;
	top: -50px;
	left: -10px;
	background: white;
}
.accent {
	color: $accent;
}
.hireme-container {
	background: $bg-2;
	padding: 3em 1.5em;
	height: 100vh;
}
.contact-text {
	margin-bottom: 1em;
}
.title-icon {
	display: flex;
	align-items: baseline;
}
.icon {
	color: rgba($white, 0.3);
	margin-left: 0.5em;
	height: 1.5em;
}
.field {
	margin-bottom: 2em;
	font: $font-text-mb;
	label {
		display: block;
		color: $white;
		font: $font-subtitle-mb;
	}
}
.input-field {
	// border: 1px solid rgba($white, 0.3);
	height: 2.2em;
}
.input-field,
.textarea-field {
	color: $white;
	width: 100%;
	background: rgba($white, 0.5);
	border: 1px solid rgba($white, 0.3);
}
.btn-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.msg-bubble {
	color: $accent;
	&::after {
		content: "asdfasd";
		color: $bg-2;
		position: absolute;
		top: 50%;
	}
}
.invalid {
	border: 2px solid $danger;
}
.error {
	color: $danger;
}
</style>
