module.exports = {
  user          : process.env.NODE_ORACLEDB_USER || "scott",
  password      : process.env.NODE_ORACLEDB_PASSWORD || "tiger",
  connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orcl",
  externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};
