<script>
import BaseButton from "./baseButton.vue";
import basebutton from "./baseButton.vue";
import MartzIcon from "../components/icons/martz-icons.vue";
import { required, email } from "vuelidate/lib/validators";
import emailjs from "emailjs-com";

export default {
	components: { BaseButton, basebutton, MartzIcon },
	data() {
		return {
			title: "Hire me",
			name: "",
			email: "",
			message: "",
			isSubmitted: false,
			mediaContacts: [
				{
					icon: "fa-regular fa-envelope",
					name: "E-mail",
					url: "mailto:antonio.fr.martinezc@hotmail.com",
					link_name: "antonio.fr.martinezc@hotmail.com",
				},
				{
					icon: "fa-brands fa-linkedin-in",
					name: "LinkedIn",
					url: "https://www.linkedin.com/in/antoniomartinez17/",
					link_name: "linkedin.com/in/antoniomartinez17",
				},
				{
					icon: "fa-brands fa-github",
					name: "Github",
					url: "https://github.com/anthonymartz17",
					link_name: "@anthonymartz17",
				},
				{
					icon: "fa-brands fa-instagram",
					name: "Instagram",
					url: "https://instagram.com/martz_code?igshid=ZDdkNTZiNTM=",
					link_name: "@martz_code",
				},
			],
		};
	},
	validations: {
		name: { required },
		email: { required, email },
		message: { required },
	},

	methods: {
		sendMsg() {
			this.isSubmitted = true;
			this.$v.$touch();

			if (this.$v.$invalid) {
				return;
			} else {
				try {
					emailjs.sendForm(
						"service_3wcfync",
						"template_hrwt0yr",
						this.$refs.form,
						"RtBt6viltYRuy3fWG"
						// emailData
					);
					alert("message sent successfully");
				} catch (error) {
					console.log({ error });
					alert(error);
				} finally {
					this.isSubmitted = false;
					this.name = "";
					this.email = "";
					this.message = "";
				}
			}
		},
	},
};
</script>
<template>
	<div class="hireme-wrapper">
		<div class="hireme-container">
			<form class="contact-form" ref="form" @submit.prevent="sendMsg">
				<h2 class="sections-title-global hireme-title">
					{{ title }}
					<MartzIcon icon="handshake" size="30" />
				</h2>

				<p class="text-small contact-text">
					For any questions, feel free to contact me through any of the methods
					bellow.
				</p>
				<div class="field">
					<label for="name">Name</label>
					<input
						v-model="name"
						type="text"
						id="name"
						name="name"
						autocomplete="off"
						:class="['input-field', { invalid: isSubmitted && $v.name.$error }]"
					/>
					<p v-if="isSubmitted && !$v.name.required" class="text-small">
						Please enter a name
					</p>
				</div>
				<div class="field">
					<label for="email">Email</label>
					<input
						v-model="email"
						name="email"
						type="email"
						id="email"
						autocomplete="off"
						:class="[
							'input-field',
							{ invalid: isSubmitted && $v.email.$error },
						]"
					/>
					<div v-if="isSubmitted && $v.email.$error">
						<p
							v-if="isSubmitted && !$v.email.required"
							class="text-small error"
						>
							Please enter an email
						</p>
						<p
							v-else-if="isSubmitted && !$v.email.email"
							class="text-small error"
						>
							Please enter a valid email
						</p>
					</div>
				</div>
				<div class="field">
					<label for="email">Message</label>
					<textarea
						v-model="message"
						name="message"
						id="email"
						cols="30"
						rows="7"
						:class="[
							'textarea-field',
							{ invalid: isSubmitted && $v.message.$error },
						]"
					></textarea>
					<p
						v-if="isSubmitted && !$v.message.required"
						class="text-small error"
					>
						Please enter a message
					</p>
				</div>
				<div class="btn-container">
					<BaseButton icon="sendit" text="Send it" size="30" class="btn-sendit"/>

					<font-awesome-icon
						icon="fa-solid fa-message"
						class="msg-bubble"
						size="2x"
					/>
				</div>
			</form>
			<!-- <div class="popUp-container">
				<div class="chat-box">
					<div class="profile-img"></div>
					<div class="header">
						<p class="text-small">Antonio Martinez</p>
						<font-awesome-icon icon="fa-solid fa-xmark" class="accent" />
					</div>
					<p class="msg-body text-small">
						Hey, I'm available to chat in case of any questions
					</p>
					<input type="text" />
				</div>
			</div> -->
			<div class="other-contact">
				<h2 class="sections-title-global">Other</h2>
				<ul class="contact-links">
					<li v-for="media in mediaContacts" :key="media.name">
						<a :href="media.url" target="blank">
							<font-awesome-icon :icon="media.icon" class="icon" />
							<p>{{ media.link_name }}</p>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.hireme-wrapper{
	background: $bg-2;
	padding: 2em;
}
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
	// @include breakpoint(tablet){
	// 	display: flex;
	// 	gap: 2em;
	// 	align-items: flex-end;
	// }
}
.contact-text {
	margin-bottom: 1em;
}
.hireme-title {
	display: flex;
	align-items: center;
	gap: 0.3em;
}

.title-icon {
	display: flex;
	align-items: baseline;
	background: red;
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
.btn-sendit{
	@include breakpoint(tablet){
		width: 40%;
	}
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
	border: 2px solid $accent;
}

.contact-form {
	margin-bottom: 7em;
}
.other-contact {
	margin-bottom: 6em;
}
.contact-links {
	margin: 0;
	padding: 0;
	text-indent: 0;
	list-style-type: 0;
	//

	li {
		margin-bottom: 1.5em;
		list-style: none;
	}
	a {
		text-decoration: none;
		color: $white;
		display: flex;
		align-items: center;
		gap: 1em;
		font: $font-small-mb;
	}
}
</style>
