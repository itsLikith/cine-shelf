import nodemailer from "nodemailer";

const otpSender = async (otp,tomail) => {
    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'saragadamlikith48@gmail.com',
            pass: 'vetd glaj dmuw uicb'
        }
    });

    // Setup email data
    const mailOptions = {
        from: '"CineShelf" <saragadamlikith48@gmail.com>', // sender address
        to: `${tomail}`, // list of receivers
        subject: 'CineShelf - OTP', // Subject line
        text: `your otp for cineshelf is ${otp}`, // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log(`OTP sent successfully to ${tomail}`);
    });
}

export { otpSender }