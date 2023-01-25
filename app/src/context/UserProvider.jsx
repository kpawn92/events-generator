import { createContext, useContext, useState } from 'react';

const userContext = createContext();
const getTokenContext = createContext();
const dataUserContext = createContext();

export const useUserContext = () => {
	return useContext(userContext);
};
export const useGetTokenContext = () => {
	return useContext(getTokenContext);
};
export const useDataUserContext = () => {
	return useContext(dataUserContext);
};

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [dataUser, setDataUser] = useState(null);
	const [data, setData] = useState(null);

	const toggleToken = state => setToken(state);
	const toggleDataUser = state => setDataUser(state);

	return (
		<userContext.Provider
			value={{ token, dataUser, data, setData, setDataUser }}
		>
			<getTokenContext.Provider value={toggleToken}>
				<dataUserContext.Provider value={toggleDataUser}>
					{children}
				</dataUserContext.Provider>
			</getTokenContext.Provider>
		</userContext.Provider>
	);
};
