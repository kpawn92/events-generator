import jwt from 'jsonwebtoken';
import {
    User,
    Moderator,
    Manager,
    Economist,
    Subscribers,
} from '../models/entity';
import { KEY_SECRET } from '../config/env';
import { passwordHelper } from '../helpers';
import { userHelper } from '../helpers';

export const signUp = async (req, res) => {
    try {
        const { role } = req.body;
        if (role) {
            if (role === 'moderator') {
                const moderator = await userHelper.createAdvancedUser(
                    req.body,
                    Moderator
                );
                if (!moderator)
                    return res
                        .status(400)
                        .json({ message: 'Moderator already exists' });
                return res.status(200).json(moderator);
            }
            if (role === 'manager') {
                const manager = await userHelper.createAdvancedUser(
                    req.body,
                    Manager
                );
                if (!manager)
                    return res
                        .status(400)
                        .json({ message: 'Manager already exists' });
                return res.status(200).json(manager);
            }
            if (role === 'economist') {
                const economist = await userHelper.createAdvancedUser(
                    req.body,
                    Economist
                );
                if (!economist)
                    return res
                        .status(400)
                        .json({ message: 'Economist already exists' });
                return res.status(200).json(economist);
            }
        }
        const subscriber = await userHelper.createAdvancedUser(
            req.body,
            Subscribers
        );

        if (!subscriber)
            res.status(404).json({ message: 'Subscriber already exists' });
        res.status(200).json(subscriber);
    } catch (error) {
        return res.status(500).json({ message: 'Error controller: ' + error });
    }
};

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const email_user = await User.getUserByEmail(email);

        if (!email_user)
            return res.status(403).json({ message: 'Invalid user' });

        const { pass_user, id } = email_user; // Destructuring function getUserByEmail()

        const mathPassword = await passwordHelper.comparePassword(
            password,
            pass_user
        );

        if (!mathPassword)
            return res
                .status(401)
                .json({ token: null, message: 'Invalid password' });

        const token = jwt.sign({ id }, KEY_SECRET, {
            expiresIn: 86400, // 24h valid
        });

        res.json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Error server: ' + error });
    }
};
