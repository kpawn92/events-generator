import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TbArrowBackUp } from 'react-icons/tb';
import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { codePais } from '../../../last/api/code.pais';
import BtnDisabled from '../components/contents/BtnDisabled';
import { rules } from '../config/rules';

const Register = () => {
	const [check, setCheck] = useState(false);
	const [listRules, setListRules] = useState(false);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const onSubmit = async body => {
		console.log(body);
	};

	const displayOn = { display: 'block' };
	const displayOff = { display: 'none' };

	return (
		<Main>
			<h5>Registro de</h5>
			<Title>Suscripci&oacute;n</Title>
			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				<div>
					{listRules && (
						<>
							{rules.map((norm, i) => (
								<ul key={i} className='italic list-disc text-left'>
									<li>{norm.rule}</li>
								</ul>
							))}
							<button
								className='border border-t-8 rounded-full hover:shadow-sm mx-auto py-2 px-9 mb-2'
								onClick={() => setListRules(false)}
							>
								<TbArrowBackUp />
							</button>
						</>
					)}
				</div>
				<div style={!listRules ? displayOn : displayOff}>
					<div className='grid lg:grid-cols-2 text-left my-3 w-full'>
						<div className='ml-5'>
							<label htmlFor='name' className='label'>
								Nombre(s)
							</label>
							<input
								type='text'
								id='name'
								{...register('name', {
									required: true,
									pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
								})}
								className='form-input'
							/>
							{errors && (
								<div>
									{errors.name?.type === 'required' && (
										<span className='span-warning'>
											El campo nombre es requerido
										</span>
									)}
									{errors.name?.type === 'pattern' && (
										<span className='span-danger'>El nombre es incorrecto</span>
									)}
								</div>
							)}
							<label htmlFor='lastname' className='label'>
								Apellidos
							</label>
							<input
								type='text'
								id='lastname'
								{...register('lastname', {
									required: true,
									pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
								})}
								className='form-input'
							/>
							{errors && (
								<div>
									{errors.lastname?.type === 'required' && (
										<span className='span-warning'>
											El campo apellidos es requerido
										</span>
									)}
									{errors.lastname?.type === 'pattern' && (
										<span className='span-danger'>
											El/los apellido(s) es/son incorrecto
										</span>
									)}
								</div>
							)}
							<label htmlFor='nation' className='label'>
								Nacionalidad
							</label>
							<input
								type='text'
								id='nation'
								{...register('nation', {
									required: true,
								})}
								className='form-input'
								list='paises'
							/>
							{errors && (
								<div>
									{errors.nation?.type === 'required' && (
										<span className='span-warning'>El campo es requerido</span>
									)}
								</div>
							)}
							<datalist id='paises'>
								{Object.entries(codePais).map(pais => (
									<option
										key={pais[0]}
										value={pais[1] + '-' + pais[0]}
									></option>
								))}
							</datalist>
							<label htmlFor='dni' className='label'>
								DNI
							</label>
							<input
								type='text'
								id='dni'
								{...register('dni', {
									required: true,
									minLength: 11,
									pattern: /^[0-9]+$/i,
								})}
								className='form-input'
							/>
							{errors && (
								<div>
									{errors.dni?.type === 'required' && (
										<span className='span-warning'>El campo es requerido</span>
									)}
									{errors.dni?.type === 'minLength' && (
										<span className='span-warning'>
											No menos de 11 caracteres
										</span>
									)}
									{errors.dni?.type === 'pattern' && (
										<span className='span-danger'>El campo es incorrecto</span>
									)}
								</div>
							)}
						</div>

						<div className='ml-5'>
							<label htmlFor='institution' className='label'>
								Instituci&oacute;n
							</label>
							<input
								type='text'
								id='institution'
								{...register('institution', {
									required: true,
									pattern: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/i,
								})}
								className='form-input'
							/>
							{errors && (
								<div>
									{errors.institution?.type === 'required' && (
										<span className='span-warning'>El campo es requerido</span>
									)}
									{errors.institution?.type === 'pattern' && (
										<span className='span-danger'>El campo es incorrecto</span>
									)}
								</div>
							)}
							<label htmlFor='category' className='label'>
								Categoria
							</label>
							<input
								type='text'
								id='category'
								{...register('category', {
									required: true,
									pattern: /^[0-1]{1}$/i,
								})}
								className='form-input'
								list='categ'
							/>
							{errors && (
								<div>
									{errors.category?.type === 'required' && (
										<span className='span-warning'>El campo es requerido</span>
									)}
									{errors.category?.type === 'pattern' && (
										<span className='span-danger'>El campo es incorrecto</span>
									)}
								</div>
							)}
							<datalist id='categ'>
								<option value='0'>Trabajador</option>
								<option value='1'>Estudiante</option>
							</datalist>
							<label htmlFor='dni' className='label'>
								Correo electr&oacute;nico
							</label>
							<input
								type='text'
								id='email'
								{...register('email', {
									required: true,
									pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
								})}
								className='form-input'
							/>
							{errors && (
								<div>
									{errors.email?.type === 'required' && (
										<span className='span-warning'>El campo es requerido</span>
									)}
									{errors.email?.type === 'pattern' && (
										<span className='span-danger'>El campo es incorrecto</span>
									)}
								</div>
							)}
							<label htmlFor='dni' className='label'>
								Contrase&ntilde;a
							</label>
							<input
								type='password'
								id='password'
								{...register('password', {
									required: true,
								})}
								className='form-input'
							/>
							{errors && (
								<div>
									{errors.password?.type === 'required' && (
										<span className='span-warning'>El campo es requerido</span>
									)}
								</div>
							)}
						</div>
					</div>
					<div className='flex items-center ml-5'>
						<input
							type='checkbox'
							id='link-checkbox'
							className='link'
							onClick={() => setCheck(!check)}
						/>
						<label
							htmlFor='link-checkbox'
							className='ml-2 font-medium text-gray-900 cursor-pointer'
						>
							Estoy de acuerdo con los{' '}
						</label>
						<span
							className='ml-1 text-blue-600 hover:underline cursor-pointer'
							onClick={() => setListRules(!listRules)}
						>
							t&eacute;rminos y condiciones
						</span>
					</div>
					<div className='mt-2'>
						{check ? (
							<button className='btn-primary'>Guardar registro</button>
						) : (
							<BtnDisabled>Guardar registro</BtnDisabled>
						)}
					</div>
				</div>
			</form>
		</Main>
	);
};

export default Register;
