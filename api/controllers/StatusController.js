const checkServerStatus = ({ res }) => {
  res.send("Server is up and running");
};

module.exports = { checkServerStatus };
