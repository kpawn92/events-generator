import { DigestInstance } from '../models/entity';

export const getDigestInsntances = async (req, res) => {
    try {
        const result = await DigestInstance.getInstances();
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
export const setDigestInsntance = async (req, res) => {
    try {
        const result = await DigestInstance.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

export const getStatusByIdSubs = async (req, res) => {
    try {
        const { subsId } = req.params;
        const result = await DigestInstance.getStatusBySubscriber(subsId);
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

export const updateStateById = async (req, res) => {
    try {
        const { instanceId } = req.params;
        const result = await DigestInstance.updateStatusById(instanceId, 1);
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
