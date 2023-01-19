import { useMemo, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { getUserByRole } from '../../api/user.api';
import { useUserContext } from '../../context/UserProvider';

const Table = ({ role }) => {
	const { token, data, setData } = useUserContext();

	useEffect(() => {
		const Users = async role => {
			const response = await getUserByRole(token, role);
			setData(response.data);
		};

		Users(role);
	}, []);

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
		<p>Loading...</p>
	) : (
		<MaterialReactTable columns={columns} data={data} />
	);
};

export default Table;
