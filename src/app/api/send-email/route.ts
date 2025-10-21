import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_PASS = process.env.GMAIL_PASS;
const RECEIVING_EMAIL = GMAIL_USER;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: GMAIL_USER,
        pass: GMAIL_PASS,
    },
});

export async function POST(request:Request){
    if(request.method !== 'POST'){
        return NextResponse.json({message: 'Requêtes non autorisées'}, {status: 405});
    }

    try {
    // Récupération des données JSON envoyées par le frontend
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation basique des données
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Tous les champs sont requis.' }, { status: 400 });
    }

    // Construction des options de l'e-mail
    const mailOptions = {
      from: `Portfolio Contact - ${name} <${email}>`, // L'adresse d'envoi affichée
      to: RECEIVING_EMAIL, // Votre adresse personnelle
      replyTo: email, // Répondre va directement à l'utilisateur
      subject: `[PORTFOLIO] ${subject}`,
      text: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}

--- MESSAGE ---
${message}
      `,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #FFC107;">Nouveau Message de Contact Portfolio</h2>
          <p><strong>De:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Sujet:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
          <div style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 6px;">${message}</div>
        </div>
      `,
    };

    // Tentative d'envoi de l'e-mail
    await transporter.sendMail(mailOptions);
    
    // Succès
    return NextResponse.json({ message: 'E-mail envoyé avec succès.' }, { status: 200 });
  
  } catch (error) {
    console.error('Erreur Nodemailer/Serveur:', error);
    // Erreur côté serveur
    return NextResponse.json({ message: 'Échec de l\'envoi du message en raison d\'une erreur de configuration ou d\'API.' }, { status: 500 });
  } 
}