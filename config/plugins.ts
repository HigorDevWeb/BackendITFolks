export default ({ env }) => ({
    // ... outros plugins
    email: {
        config: {
            provider: 'nodemailer',
            providerOptions: {
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'noreplyseuprojeto@gmail.com', // SEU EMAIL DE ENVIO
                    pass: 'zlcp usrs osec efzt', // use app password se 2FA ativado
                },
                // tls: { rejectUnauthorized: false }, // use só se der erro de TLS
            },
            settings: {
                defaultFrom: 'noreplyseuprojeto@gmail.com',
                defaultReplyTo: 'noreplyseuprojeto@gmail.com',
                testAddress: 'noreplyseuprojeto@gmail.com',
            },
        },
    },
});
