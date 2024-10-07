import sendEmail from "../utils/nodemailer";

const sendWelcomeEmail = async (user) => {
  const subject = 'Welcome to our website!';
  const text = `Hi ${user.name}, welcome to our app!`;
  await sendEmail(user.email, subject, text);
};

export {sendWelcomeEmail};