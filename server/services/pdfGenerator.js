import db from '../models/index.js';

const generatePDFContent = (reservation) => {
    const pdfDoc = new db.PDFDocument();
    const formattedDate = db.format(new Date(reservation.date), 'dd MMMM yyyy', { locale: db.fr });
    const logo = 'C:\\Users\\ISMAIL ELHANI\\cleanSpace\\src\\images\\logo.png'; 

    pdfDoc.image(logo, {
        fit: [150, 150],
        align: 'center',
        valign: 'center',
    });

    pdfDoc.font('Helvetica-Bold').fontSize(18).fillColor('#004AAD').text('Confirmation de réservation', { align: 'center' }).moveDown();

    pdfDoc.font('Helvetica-Bold').fontSize(12).fillColor('black').text(`Merci `, { continued: true }).fillColor('#FBCE2D').text(reservation.name, { continued: true }).fillColor('black').text(` pour votre réservation. Votre réservation a été confirmée avec succès. Veuillez trouver ci-dessous les détails :`).moveDown();

    const formData = [
        { label: 'Nom', value: reservation.name },
        { label: 'Téléphone', value: reservation.phone },
        { label: 'Ville', value: reservation.city },
        { label: 'Service', value: reservation.service },
        { label: 'Type de résidence', value: reservation.residenceType },
        { label: 'Date', value: formattedDate },
        { label: 'Heure', value: reservation.time }
    ];

    const formHeight = (formData.length + 1) * 25;
    const formWidth = 400;
    const padding = 20;

    const formX = pdfDoc.x + padding;
    const formY = pdfDoc.y + padding;
    pdfDoc.rect(formX, formY, formWidth, formHeight).lineWidth(3).strokeColor('#FBCE2D').stroke();

    formData.forEach(({ label, value }, index) => {
        const textX = formX + padding;
        const textY = formY + padding + index * 25;

        pdfDoc.font('Helvetica-Bold').fontSize(12).fillColor('#004AAD').text(`${label}: `, textX, textY);
        pdfDoc.font('Helvetica').fontSize(12).fillColor('black').text(`${value}`, textX + 110, textY);
    });
    pdfDoc.x = 70;
    pdfDoc.y += padding;
    pdfDoc.moveDown(2);
    
    pdfDoc.font('Helvetica-Bold').fontSize(12).text('Si vous avez besoin d\'aide ou de plus d\'informations, n\'hésitez pas à nous contacter :', { moveDown: true }).moveDown();
    pdfDoc.font('Helvetica-Bold').fontSize(12).fillColor('#004AAD').text('Téléphone:', { continued: true }).fillColor('black').font('Helvetica').text(' 0659063386').moveDown();
    pdfDoc.font('Helvetica-Bold').fontSize(12).fillColor('#004AAD').text('E-mail:', { continued: true }).fillColor('black').font('Helvetica').text(' Cleanspace137@gmail.com').moveDown();
    pdfDoc.font('Helvetica-Bold').fontSize(12).fillColor('#004AAD').text('Instagram:', { continued: true }).fillColor('black').font('Helvetica').text(' CleanSpace.ma').moveDown();

    return pdfDoc;
};

export default generatePDFContent;
