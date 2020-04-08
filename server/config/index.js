module.exports = {
    secret_string: '',
    database: {
        uri: process.env.NODE_ENV === 'development' ? `mongodb://127.0.0.1:27017/${process.env.DB_NAME}` : `mongodb+srv://${process.env.DB_USER}:${process.env.DB_SECRET}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
    },
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    }
};