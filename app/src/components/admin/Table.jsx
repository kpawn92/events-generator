import { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { getUserByRole } from '../../api/user.api';
import { useUserContext } from '../../context/UserProvider';

const Table = ({ role }) => {
	const { token } = useUserContext();

	const [data, setData] = useState(null);

	useEffect(() => {
		const Users = async role => {
			const response = await getUserByRole(token, role);
			setData(response.data);
		};

		Users(role);
	}, []);

	/* const data = [
		{
			name: {
				firstName: 'John',
				lastName: 'Doe',
			},
			address: '261 Erdman Ford',
			city: 'East Daphne',
			state: 'Kentucky',
		},
		{
			name: {
				firstName: 'John',
				lastName: 'Doe',
			},
			address: '261 Erdman Ford',
			city: 'East Daphne',
			state: 'Kentucky',
		},
		{
			name: {
				firstName: 'John',
				lastName: 'Doe',
			},
			address: '261 Erdman Ford',
			city: 'East Daphne',
			state: 'Kentucky',
		},
		{
			name: {
				firstName: 'Jane',
				lastName: 'Doe',
			},
			address: '769 Dominic Grove',
			city: 'Columbus',
			state: 'Ohio',
		},
		{
			name: {
				firstName: 'Joe',
				lastName: 'Doe',
			},
			address: '566 Brakus Inlet',
			city: 'South Linda',
			state: 'West Virginia',
		},
		{
			name: {
				firstName: 'Kevin',
				lastName: 'Vandy',
			},
			address: '722 Emie Stream',
			city: 'Lincoln',
			state: 'Nebraska',
		},
		{
			name: {
				firstName: 'Joshua',
				lastName: 'Rolluffs',
			},
			address: '32188 Larkin Turnpike',
			city: 'Charleston',
			state: 'South Carolina',
		},
	]; */

	const columns = useMemo(
		() => [
			{
				accessorKey: 'dni',
				header: 'DNI',
			},
			{
				accessorKey: 'name',
				header: 'Nombre',
			},
			{
				accessorKey: 'email',
				header: 'Correo',
			},
			{
				accessorKey: 'status',
				header: 'Status',
			},
		],
		[]
	);

	return !data ? (
		<p>Loading</p>
	) : (
		<MaterialReactTable columns={columns} data={data} />
	);
};

export default Table;
