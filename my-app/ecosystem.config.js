module.exports = {
  apps: [
    {
      name: "my-app",
      interpreter: "bash",
      script: "npm",
      args: "start",
      watch: false,
    },
  ],
};
