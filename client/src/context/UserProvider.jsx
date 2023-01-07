import { createContext, useContext, useState } from 'react';

const userContext = createContext();
const getTokenContext = createContext();

export const useUserContext = () => {
	return useContext(userContext);
};
export const useGetTokenContext = () => {
	return useContext(getTokenContext);
};

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState(null);

	const toggleToken = state => {
		setToken(state);
	};

	return (
		<userContext.Provider value={token}>
			<getTokenContext.Provider value={toggleToken}>
				{children}
			</getTokenContext.Provider>
		</userContext.Provider>
	);
};
