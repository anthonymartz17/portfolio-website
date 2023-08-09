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
	
		async signIn({ commit, dispatch }, { email, password }) {
			try {
				let response = await signInWithEmailAndPassword(auth, email, password);

				const currentUser = response._tokenResponse.email;
				const token = response._tokenResponse.idToken;
				const expiresIn = response._tokenResponse.expiresIn;

				clearTimeout(timer);
				timer = setTimeout(() => {
					dispatch("signOut");
					//expects timer in miliseconds
				}, expiresIn * 1000);

				commit("SET_USER", {
					currentUser,
					token,
				});
				localStorage.setItem(
					"blog_admin",
					JSON.stringify({ currentUser, token })
				);

				return response.user;
			} catch (error) {
				throw error;
			}
		},
		async autoLogIn({ commit }) {
			const admin = JSON.parse(localStorage.getItem("blog_admin"));
			if (admin)
				if (admin.currentUser && admin.token) {
					commit("SET_USER", admin);
				}
		},
		async signOut({ commit }) {
			try {
				await signOut(auth);
				localStorage.removeItem("blog_admin");
				commit("SET_USER", null);
				clearTimeout(timer);
			} catch (error) {
				throw error;
			}
		},
		
		setAlertMsg({ commit }, alertData) {
			// commit("SET_ALERT_MSG", alertData);
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.user,
		showAlert: (state) => !!Object.keys(state.alert).length,
	},
};
