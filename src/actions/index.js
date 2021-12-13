// action creator for sign in
export const signIn = (userId) => {
	return {
		type: "SIGN_IN",
		payload: userId,
	};
};

//action creator for sign out
export const signOut = () => {
	return {
		type: "SIGN_OUT",
	};
};
