import { LivingRoom, Manager } from '../models/entity'

export const verifyManagerByBody = async (req, res, next) => {
    try {
        const { name, fk_manager } = req.body

        const manager = await Manager.getManagerById(fk_manager)
        if (manager.length === 0) return res.status(404).json({ message: 'Manager not found' })

        const { countLiving } = await LivingRoom.getLivingRoomByName(name)
        if (countLiving === 0)
            return next()
        return res.status(404).json({ message: 'Living Room already exits' })
    } catch (error) {
        return res.status(500).json({ message: 'Error server, ' + error })
    }

};