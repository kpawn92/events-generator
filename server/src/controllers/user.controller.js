import { Economist, Manager, User } from '../models/entity';
import { EMAIL_ADMIN } from '../config/env';
import { passwordHelper } from '../helpers';

export const users = async (req, res) => {
    try {
        const usersDB = await User.getUsers();
        const users = usersDB.filter((user) => user.email !== EMAIL_ADMIN);

        res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: 'Error: ' + error });
    }
};

export const user = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = await User.getUserById(userId);

        res.status(200).json(user);
    } catch (error) {
        return res
            .status(500)
            .json({ message: 'Error getting user, ' + error });
    }
};

export const editUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        const { password } = req.body;

        const pass = await passwordHelper.encryptPassword(password);
        const update = await User.updateUser(userId, pass, 1);

        res.status(200).json(update);
    } catch (error) {
        return res.status(500).json({ message: 'Error edit user, ' + error });
    }
};

export const toInvalidateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const invalidate = await User.invalidating(userId, 0);
        res.status(200).json(invalidate);
    } catch (error) {
        return res.status(500).json({ message: 'Error server' + error });
    }
};

export const usersByRole = async (req, res) => {
    try {
        const { role } = req.params;
        const result = await User.getUsersByRol(role, 1);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ message: 'Error server: ' + error });
    }
};

export const getManagersActived = async (req, res) => {
    try {
        const { role } = req.params;
        if (role === 'manager') {
            const manager = await Manager.getManagers(1);
            return res.status(200).json(manager);
        }
        if (role === 'economist') {
            const economist = await Economist.getEconomists(1);
            return res.status(200).json(economist);
        }
        res.status(404).json({ message: 'Rol invalid' });
    } catch (error) {
        return res.status(500).json({ message: 'Error server: ' + error });
    }
};
