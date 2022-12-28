import { PaymentInstance } from '../models/entity';
import { getUserById } from '../helpers';

export const createPayment = async (req, res) => {
    try {
        const payment = await PaymentInstance.create(req.body);
        res.status(200).json(payment);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

export const getPaymentsByState = async (req, res) => {
    try {
        const payments = await PaymentInstance.getPayments();
        res.status(200).json(payments);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

export const updateState = async (req, res) => {
    try {
        const { paymentId } = req.params;
        const payment = await PaymentInstance.updateStatePaymentById(
            paymentId,
            1
        );
        res.status(200).json(payment);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

export const getPaymentBySubscriber = async (req, res) => {
    try {
        const id = await getUserById(req, res);
        const result = await PaymentInstance.getStateBySubscriber(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
