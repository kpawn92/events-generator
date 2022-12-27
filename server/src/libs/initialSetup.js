import { Roles, User } from '../models/entity';
import { EMAIL_ADMIN, KEY_ADMIN } from '../config/env';
import { join } from 'path'


export const createRoles = async () => {
    try {
        const { count } = await Roles.count();

        if (count > 0) return;
        await Roles.create();
    } catch (error) {
        console.log(error);
    }
};

export const createAdmin = async () => {
    try {
        const { count_users } = await User.setAdmin();

        if (count_users > 0) return;
        await User.createAdmin(EMAIL_ADMIN, KEY_ADMIN);
    } catch (error) {
        console.log(error);
    }
};
