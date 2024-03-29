const Reducer = (state, action)=>{
	switch(action.type){
	case 'login_start':
		return{
			user:null,
			isFetching:true,
			error:false,
		};
	case 'login_success':
		return{
			user:action.payload,
			isFetching:false,
			error:false,
		};
	case 'login_failure':
		return{
			user:null,
			isFetching:false,
			error:true,
		};
	case 'update_start':
		return{
			...state,
			isFetching: true,
		};
	case 'update_success':
		return{
			user:action.payload,
			isFetching:false,
			error:false,
		};
	case 'update_failure':
		return{
			user:state.user,
			isFetching:false,
			error:true,
		};
	case 'delete_user_start':
		return{
			user:state.user,
			isFetching:true,
			error:false,
		};
	case 'delete_user_success':
		return{
			user:null,
			isFetching:false,
			error:false,
		};
	case 'delete_user_failure':
		return{
			user:state.user,
			isFetching:false,
			error:true,
		};
	case 'logout':
		return{
			user:null,
			isFetching:false,
			error:false,
		};
	default:
		return state;

	}
};

export default Reducer;