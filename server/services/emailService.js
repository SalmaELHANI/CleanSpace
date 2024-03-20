import db from '../models/index.js';

const transporter = db.nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: db.gmailUser,
        pass: db.gmailPass,
    },
});

const sendEmail = async (recipient, subject, htmlContent,attachmentPath) => {
    try {
        await transporter.sendMail({
            from: db.gmailUser,
            to: recipient,
            subject: subject,
            html: htmlContent,
             attachments: [{
                filename: 'reservation.pdf',
                path: attachmentPath,
                contentType: 'application/pdf'
            }]
        });
        console.log('E-mail envoyé avec succès !');
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail :', error);
    }
};

export default sendEmail;
