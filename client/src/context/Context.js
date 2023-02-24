import {React, createContext, useEffect, useReducer} from 'react';
import Reducer from './Reducer';

const initial_state = {
	// user: true,
	user:JSON.parse(localStorage.getItem('user')) || false,
	isFetching:false,
	error:false,
};


export const Context = createContext(initial_state);

// eslint-disable-next-line react/prop-types
export const ContextProvider = ({children}) => {
	const [state, dispatch] = useReducer(Reducer, initial_state);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(state.user));
	}, [state.user]);

	return(
		<Context.Provider 
			value={{
				user: state.user,
				isFetching: state.isFetching,
				error: state.error,
				dispatch,
			}}
		>
			{children}
		</Context.Provider>
	);
};