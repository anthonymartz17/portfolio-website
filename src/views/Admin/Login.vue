<script>
import { required, email } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import BaseButton from "@/components/Buttons/BaseButton.vue";
import MartzIcon from "@/components/CustomIcons/MartzIcons.vue";

export default {
	components: {
		BaseButton,
		MartzIcon,
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
					this.$router.push({ name: "Admin" });
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
		<section>
			<div
			class="signIn-container"
			data-aos="fade-up"
			data-aos-duration="800"
			data-aos-delay="400"
			>
			<div>
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
							<p
								v-else-if="submitted && !$v.user.email.email"
								class="text-small"
							>
								Please enter a valid email
							</p>
						</div>
						<div class="field">
							<label class="label-field" for="password">Password</label>
							<input
								v-model="user.password"
								type="password"
								id="password"
								:class="[
									'text-thin',
									'input-field',
									{ invalid: submitted && $v.user.password.$invalid },
								]"
							/>
							<p
								v-if="submitted && !$v.user.password.required"
								class="text-small"
							>
								Please enter password
							</p>
						</div>

						<!-- <div class="btn-container"> -->
						<BaseButton
							icon="login"
							text="Sign In"
							size="30"
							class="custom-btn"
						/>
						<!-- </div> -->
					</form>
				</div>
				<div class="logo-container">
					<router-link to="/">
						<transition enter-active-class="animate__animated animate__fadeIn">
							<MartzIcon icon="logo" size="60" />
						</transition>
					</router-link>
				</div>
			</div>
		</section>
	</div>
</template>
<style lang="scss" scoped>
/* Custom CSS to display images inline */
.signIn-wrapper {
	background: $bg-1;
	display: grid;
	place-items: center;
	height: 100vh;
}
.signIn-container {
	min-width: 20em;
	min-height: 35em;
	padding: 1em;
	box-shadow: 0 3px 20px rgba(255, 255, 255, 0.151);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.logo-container {
	display: flex;
	justify-content: center;
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
	margin-bottom: 2em;
	font-size: 1.2em;
}

.custom-btn {
	width: 100%;
}

.signIn-wrapper {
	@include breakpoint(tablet) {
		/* Add tablet-specific styles here if needed */
	}
	@include breakpoint(desktop) {
		/* Add desktop-specific styles here if needed */
		.signIn-container {
			min-width: 30em;
			min-height: 35em;
		}
	}
}
</style>
