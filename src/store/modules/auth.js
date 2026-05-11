import { supabase } from "@/utils/supabase";

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
		async signIn({ commit }, { email, password }) {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password,
			});

			if (error) throw error;

			const user = {
				currentUser: data.user.email,
				token: data.session.access_token,
			};

			commit("SET_USER", user);
			localStorage.setItem("blog_admin", JSON.stringify(user));

			return data.user;
		},
		async autoLogIn({ commit }) {
			const { data, error } = await supabase.auth.getSession();

			if (error || !data.session) {
				localStorage.removeItem("blog_admin");
				commit("SET_USER", null);
				return;
			}

			const user = {
				currentUser: data.session.user.email,
				token: data.session.access_token,
			};

			commit("SET_USER", user);
			localStorage.setItem("blog_admin", JSON.stringify(user));
		},
		async signOut({ commit }) {
			const { error } = await supabase.auth.signOut();

			if (error) throw error;

			localStorage.removeItem("blog_admin");
			commit("SET_USER", null);
		},

		setAlertMsg() {
			// Kept for the existing admin components that dispatch this action.
		},
	},
	getters: {
		isLoggedIn: (state) => !!state.user,
		showAlert: (state) => !!Object.keys(state.alert).length,
	},
};
