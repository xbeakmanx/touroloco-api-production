module.exports = {
  index: async (ctx) => {
    await strapi.plugins["email"].services.email.send({
      to: "tourolocoapp@gmail.com",
      from: "tourolocoapp@gmail.com",
      replyTo: "tourolocoapp@gmail.com",
      subject: "Reserva Confirmada",
      text: "Sengrid Email",
    });
    ctx.send("Email sent!");
  },
};
