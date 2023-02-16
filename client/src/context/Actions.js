export const LoginStart = () =>({ //userCredentials in parenthesis
	type: 'login_start',
});

export const LoginSuccess = (user) => ({
	type:'login_success',
	payload: user,
});

export const LoginFailure = () => ({
	type:'login_failure'
});

export const Logout = () => ({
	type:'logout'
});

export const updateStart = () =>({ //userCredentials in parenthesis
	type: 'update_start',
});

export const updateSuccess = (user) => ({
	type:'update_success',
	payload: user,
});

export const updateFailure = () => ({
	type:'update_failure'
});