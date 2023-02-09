import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Main from '../components/container/Main';
import Title from '../components/contents/Title';
import { signIn } from '../api/auth.api';
import { Alert } from '../components/contents/Messages';
import { useUserContext } from '../context/UserProvider';

const Login = () => {
	const [http, setHttp] = useState(null);

	const { setToken } = useUserContext();

	const navigate = useNavigate();

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

	const temp = () => {
		setTimeout(() => {
			setHttp(null);
		}, 4000);
	};

	const onSubmit = async body => {
		try {
			const response = await signIn(body);
			setToken(response.data.token);
			setTimeout(() => navigate('/dash'), 500);
		} catch (e) {
			setHttp(e.response.status);
			temp();
			console.log(e);
		}
	};

	return (
		<Main>
			<h5>Acceder al sistema</h5>
			<Title>Login</Title>
			<form className='form' onSubmit={handleSubmit(onSubmit)}>
				{http === 403 && (
					<Alert msg='El usuario no es valido para acceder'></Alert>
				)}
				{http === 401 && (
					<Alert msg='Credenciales incorrectas para acceder'></Alert>
				)}
				<div className='flex justify-center'>
					<div>
						<div className='text-left my-3'>
							<label htmlFor='email' className='label'>
								Email
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
										<span className='span-warning'>
											El campo nombre es requerido
										</span>
									)}
									{errors.email?.type === 'pattern' && (
										<span className='span-danger'>El campo es incorrecto</span>
									)}
								</div>
							)}
						</div>
						<div className='text-left my-3'>
							<label htmlFor='email' className='label'>
								Password
							</label>
							<input
								type='password'
								id='password'
								{...register('password', {
									required: true,
									minLength: 3,
								})}
								className='form-input'
							/>
							{errors && (
								<div>
									{errors.password?.type === 'required' && (
										<span className='span-warning'>
											El campo nombre es requerido
										</span>
									)}
									{errors.password?.type === 'minLength' && (
										<span className='span-danger'>
											Solo es admisible un m&iacute;nimo de 3 car&aacute;cteres
										</span>
									)}
								</div>
							)}
						</div>
						<button className='btn-primary w-full my-3'>Acceder</button>
					</div>
				</div>
			</form>
		</Main>
	);
};

export default Login;
