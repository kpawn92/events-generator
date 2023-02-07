import { useState } from 'react';
import { useGetTokenContext, useUserContext } from '../../context/UserProvider';
import Header from './layout/Header';
import ButtonClose from './interface/ButtonClose';
import Container from './interface/Container';

const links = [
	{ label: 'Trabajos', route: 'job' },
	{ label: 'Generar certificado', route: 'certificado' },
];

const Manager = () => {
	const { /* token, */ dataUser, setDataUser, setData } = useUserContext();
	const setToken = useGetTokenContext();

	const [divs, setDivs] = useState({
		job: true,
		certificado: false,
	});

	return (
		<>
			<Header
				links={links}
				dataUser={dataUser}
				setDivs={setDivs}
				role='Manager'
			>
				<ButtonClose state={{ setToken, setData, setDataUser }} />
			</Header>

			<Container>
				{divs.job && <div>Trabjos a revisar</div>}
				{divs.certificado && <div>Elaborar Certificado</div>}
			</Container>
		</>
	);
};

export default Manager;
