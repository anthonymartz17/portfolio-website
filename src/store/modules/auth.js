import { auth } from "../../firebaseConfig";

import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	EmailAuthProvider,
	reauthenticateWithCredential,
	updatePassword,
	sendPasswordResetEmail,
} from "firebase/auth";

//global timer for expiration token
let timer;
export default {
	namespaced: true,
	state: {
		user: null,
		alert: {},
		isLoading: false,
	},
	mutations: {
		SET_USER(state, payload) {
			state.user = payload;
		},

		SET_ALERT_MSG(state, payload) {
			state.alert = payload;
		},

		TOGGLE_IS_LOADING(state) {
			state.isLoading = !state.isLoading;
		},
	},
	actions: {
		async signUp({ commit }, { email, password }) {
			try {
				let response = await createUserWithEmailAndPassword(
					auth,
					email,
					password
				);
				const currentUser = response._tokenResponse.email;
				const token = response._tokenResponse.idToken;
				const expiresIn = response._tokenResponse.expiresIn;

				console.log(currentUser, token, expiresIn, "ESTA LOGEADO");
				return response.user;
			} catch (error) {
				throw error;
			}
		},
		async signIn({ commit, dispatch }, { email, password }) {
			try {
				let response = await signInWithEmailAndPassword(auth, email, password);

				const currentUser = response._tokenResponse.email;
				const token = response._tokenResponse.idToken;
				const expiresIn = response._tokenResponse.expiresIn;
				// const userProfile = await apiProfile.getByAuthId(response.user.uid);
				// const username = userProfile[0].name;
				// const dealerId = userProfile[0].id;
				// const isActive = userProfile[0].active;

				clearTimeout(timer);
				timer = setTimeout(() => {
					dispatch("signOutUser");
					//expects timer in miliseconds
				}, expiresIn * 1000);

				commit("SET_USER", {
					currentUser,
					token,
				});
				localStorage.setItem("admin", JSON.stringify({ currentUser, token }));

				return response.user;
			} catch (error) {
				throw error;
			}
		},
		async autoLogIn({ commit }) {
			const admin = JSON.parse(localStorage.getItem("admin"));
			if (admin)
				if (admin.currentUser && admin.token) {
					commit("SET_USER", admin);
				}
		},
		async signOutUser({ commit }) {
			try {
				await signOut(auth);
				localStorage.removeItem("admin");
				commit("SET_USER", null);
				clearTimeout(timer);
			} catch (error) {
				throw error;
			}
		},
		async changePassword(_, { currentPassword, newPassword }) {
			try {
				const user = auth.currentUser;

				let credential = EmailAuthProvider.credential(
					user.email,
					currentPassword
				);

				// Re-authenticate the user with their current password
				const test = await reauthenticateWithCredential(user, credential);
				console.log(test, "test");

				// // Change the password
				await updatePassword(user, newPassword);
			} catch (error) {
				throw error;
			}
		},
		async handleForgotPassword(_, email) {
			try {
				await sendPasswordResetEmail(auth, email);
			} catch (error) {
				throw error;
			}
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.user,
		showAlert: (state) => !!Object.keys(state.alert).length,
	},
};
