import { Roles, User } from '../models/entity/index.js';

const createUser = async (role = 'user', email, password) => {
    const id = await Roles.getRoleByName(role);
    const user = await User.create(id, email, password);
    return user;
};

export const createAdvancedUser = async (body, Modelo) => {
    const { email, password, role, dni } = body;

    const setUserModel = await Modelo.setUser(dni);

    if (setUserModel.length > 0) return;

    const { user, _id } = await createUser(role, email, password);

    const modelCreated = await Modelo.create(_id, body);

    return { user, modelCreated };
};
