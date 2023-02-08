import { createContext, useContext, useState } from 'react';

const userContext = createContext();
const eventContext = createContext();

export const useUserContext = () => {
	return useContext(userContext);
};
export const useEventContext = () => {
	return useContext(eventContext);
};

export const UserProvider = ({ children }) => {
	const [token, setToken] = useState(null);
	const [dataUser, setDataUser] = useState(null);
	const [event, setEvent] = useState(null);

	return (
		<userContext.Provider value={{ token, setToken, dataUser, setDataUser }}>
			<eventContext.Provider value={{ event, setEvent }}>
				{children}
			</eventContext.Provider>
		</userContext.Provider>
	);
};
