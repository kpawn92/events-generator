import { Type } from '@sinclair/typebox';

const LoginSchema = Type.Object(
    {
        email: Type.String({
            format: 'email',
            errorMessage: {
                type: 'Type string',
                format: 'email invalid',
            },
        }),
        password: Type.String({
            errorMessage: {
                type: 'Type string',
            },
        }),
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Format object invalid',
        },
    }
);

const EditUserSchema = Type.Object(
    {
        email: Type.String({
            format: 'email',
            errorMessage: {
                type: 'Type string',
                format: 'email invalid',
            },
        }),
        password: Type.String({
            errorMessage: {
                type: 'Type string',
            },
        }),
    },
    {
        additionalProperties: false,
        errorMessage: {
            additionalProperties: 'Format object invalid',
        },
    }
);

const ModeratorSchema = Type.Object({
    name: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    lastname: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    dni: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'Type string',
            format: 'email invalid',
        },
    }),
    password: Type.String({
        errorMessage: {
            type: 'Type string',
        },
    }),
});

const SubscriberSchema = Type.Object({
    name: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    lastname: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    nation: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    dni: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    institution: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    category: Type.Number({
        errorMessage: {
            type: 'number',
        },
    }),
    email: Type.String({
        format: 'email',
        errorMessage: {
            type: 'Type string',
            format: 'email invalid',
        },
    }),
    password: Type.String({
        errorMessage: {
            type: 'Type string',
        },
    }),
});

export { LoginSchema, ModeratorSchema, SubscriberSchema, EditUserSchema };
