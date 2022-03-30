import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey('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');

async function sendEmail(req, res) {
  try {
    await sendgrid.send({
      to: 'rohit.godse@outlook.com', // Your email where you'll receive emails
      from: "contact@softwill.in", // your website email address here
      subject: "Softwill Job Application",
      html: `<div>
              <b>Name: </b>${req.body.name}<br/>
              <b>Email: </b>${req.body.email}<br/>
              <b>Phone: </b>${req.body.phone}<br/>
              <b>Designation: </b>${req.body.designation}<br/>
            </div>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;