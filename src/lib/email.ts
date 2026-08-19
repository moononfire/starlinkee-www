import nodemailer from "nodemailer";

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: Number(process.env.SMTP_PORT) === 465, // true dla portu 465, false dla innych
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export async function sendMail(
  to: string | string[],
  subject: string,
  html: string,
  text?: string
): Promise<boolean> {
  const transporter = getTransporter();
  const from = process.env.EMAIL_FROM || "Starlinkee <noreply@starlinkee.com>";

  try {
    await transporter.sendMail({
      from,
      to,
      subject,
      html,
      text,
    });
    return true;
  } catch (error: any) {
    console.error(`SMTP Nodemailer error: ${error.message}`);
    return false;
  }
}
