import { Job } from '../models/entity';
import { getUserById } from '../helpers';

export const createItem = async (req, res) => {
    try {
        // const id = await getUserById(req, res);
        const { id } = req.params;
        const { name, link } = req.body;
        const result = await Job.create(id, name, link);
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Error creating item' + error });
    }
};

export const uploadFile = (req, res) => {
    console.log(req.file);
    res.send('Enviar archivo');
};
