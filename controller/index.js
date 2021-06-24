const { sendMail } = require('../mail/nodemailer');
const { prisma } = require('../prisma_client');

module.exports = {
    addSubscriber: async (req, res) => {
        const { email } = req.body;
        if (!validateEmail(email)) return res.status(422).json({ data: { errors: 'email is required' } });

        let subscriber = await prisma.subscriber.findUnique({ where: { email: email } });
        if (subscriber) return res.status(403).json({ data: { errors: 'already subscribe' } });

        await prisma.subscriber.create({ data: { email: email } });

        sendMail('"Queen Yekel Unrivaled" <queenyekel\'sunrivaled@gmail.com>', email, 'Successful Subscription', 'subscription.html');
        res.status(201).json({ data: { message: 'successfully subscribe' } });
    },

    getSubscriberById: async (req, res) => {
        const { id } = req.params;
        const subscriber = await prisma.subscriber.findUnique({ where: { id: parseInt(id) } });

        return res.status(200).json(subscriber ? subscriber : {});
    },

    getAllSubscribers: async (req, res) => {
        const subscribers = await prisma.subscriber.findMany();
        return res.status(200).json(subscribers ? subscribers : []);
    },

    requestRegistration: async (req, res) => {
        const register = await prisma.registration.create({ data: req.body });

        if (!register) return res.status(422).json({ data: { errors: 'Error occured while sending request' } });
        res.status(200).json({ data: { message: 'request successfully sent' } });
    },

    getRequestById: async (req, res) => {
        const { id } = req.params;
        const request = await prisma.registration.findUnique({ where: { id: parseInt(id) } });

        return res.status(200).json(request ? request : {});
    },

    getAllRequests: async (req, res) => {
        const requests = await prisma.registration.findMany();

        return res.status(200).json(requests ? requests : []);
    },
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
