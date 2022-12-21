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

const EventSchema = Type.Object({
    name: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    description: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
    date_beginning_inscription: Type.Number({
        errorMessage: {
            type: 'type number',
        },
    }),
    end_date_inscription: Type.Number({
        errorMessage: {
            type: 'type number',
        },
    }),
    date_beginning: Type.Number({
        errorMessage: {
            type: 'type number',
        },
    }),
    end_date: Type.Number({
        errorMessage: {
            type: 'type number',
        },
    }),
});

const CostEventSchema = Type.Object({
    cost: Type.Number({
        errorMessage: {
            type: 'type number',
        },
    }),
    target: Type.String({
        errorMessage: {
            type: 'string',
        },
    }),
});

export {
    LoginSchema,
    ModeratorSchema,
    SubscriberSchema,
    EditUserSchema,
    EventSchema,
    CostEventSchema,
};
