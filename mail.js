const mailer = require("nodemailer");
const transport = mailer.createTransport({
  host: "smtp.gmail.com",
  port: "587",
  auth: {
    user: "prakandalp@gmail.com",
    pass: "uotwtqqncuxualzq",
  },
});

function sendMail(to, subject, msg) {
  // validation

  const mail = {
    from: "no-reply@blog.com",
    to: to,
    subject: subject,
    html: msg,
  };

  return new Promise((resolve, reject) => {
    transport.sendMail(mail, (err, info) => {
      if (err) {
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
}

module.exports = sendMail;
// transport.sendMail(mail, (err, info) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(info);
//   }
// });
