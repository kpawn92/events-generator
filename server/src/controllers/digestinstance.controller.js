import { DigestInstance, User } from '../models/entity';

export const getDigestInstances = async (req, res) => {
    try {
        const result = await DigestInstance.getInstances();
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};
export const setDigestInstance = async (req, res) => {
    try {
        const result = await DigestInstance.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

export const getStatusByIdSubs = async (req, res) => {
    try {
        const query = await User.userByIdAccess('subscriber', req.userId);
        if (query.length === 0)
            return res.status(404).json({ message: 'Subscriber not found' });
        const { id } = query[0];
        const result = await DigestInstance.getStatusBySubscriber(id);
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
