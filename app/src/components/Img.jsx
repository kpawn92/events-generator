import imagen from '../assets/imagen.png';
import info from '../assets/info.png';
import form from '../assets/form.png';

export const LogoPage = () => {
	return <img src={imagen} alt='Logotipo del sistema' />;
};
export const InfoIco = () => {
	return <img src={info} alt='info' />;
};
export const FormIco = () => {
	return <img src={form} alt='form' width='35' />;
};
