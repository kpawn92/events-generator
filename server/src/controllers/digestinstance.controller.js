import { DigestInstance } from '../models/entity'

export const getDigestInsntances = async (req, res) => {
    const result = await DigestInstance.getInstances()
    return res.status(200).json(result)
};
export const setDigestInsntance = async (req, res) => {
    const result = await DigestInstance.create(req.body)
    return res.status(200).json(result)
};

export const getStatusByIdSubs = async (req, res) => {
    const { subsId } = req.params

    const result = await DigestInstance.getStatusBySubscriber(subsId)
    return res.status(200).json(result);
};

export const updateStateById = async (req, res) => {
    const { instanceId } = req.params
    const result = await DigestInstance.updateStatusById(instanceId, 1)
    res.status(200).json(result)
};
