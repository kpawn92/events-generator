import { VITE_BACKEND_URL } from '../config/env';
import axios from 'axios';


export const getJobs = async (token) => {

    return await axios.get(`${VITE_BACKEND_URL}/job/`, {
        headers:
            { "x-access-token": token }
    })
}