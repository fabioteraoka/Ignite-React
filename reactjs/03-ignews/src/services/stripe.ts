import Stripe from 'stripe';

export const stripe = new Stripe(
    process.env.STRIPE_API_kEY,
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'Ignews',
            version: '1.0.0',
        },
        }
);