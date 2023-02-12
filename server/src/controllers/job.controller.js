import { Job, Subscribers } from '../models/entity';

export const uploadFile = async (req, res) => {
    try {
        const { filename } = req.file;
        const { id } = await Subscribers.getIdByFkUser(req.userId);
        const result = await Job.create(id, filename);
        res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};

export const getJobsBySubs = async (req, res) => {
    try {
        const { id } = await Subscribers.getIdByFkUser(req.userId);
        const result = await Job.jobsBySubs(id);
        res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};

export const getJobs = async (req, res) => {
    try {
        const result = await Job.jobs();
        res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};

export const update = async (req, res) => {
    try {

        const result = await Job.updatejob(req.body.id, req.body.fk_digest_instance)
        res.status(200).json(result);
    } catch (e) {
        return res.status(500).json({ message: e });
    }
};