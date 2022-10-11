module.exports = {
  routes: [
    {
      method: "GET",
      path: "/email",
      handler: "email.email",
      config: { policies: [] },
    },
  ],
};
