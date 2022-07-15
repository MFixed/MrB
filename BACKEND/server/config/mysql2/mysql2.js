async function MySQLDriver() {

try {
  
      // get the client
      const mysql = require('mysql2/promise');
      const KEY = require("./config").key
      // create the connection
      const connection = await mysql.createConnection(KEY);
      // query database
      
      const [rows] = await connection.execute('SELECT 1 AS ping', );
      console.log("MySQL2 is working: PingTEST  = "+rows[0].ping+" (PingTest MySQL2 = 1 = OK )")
    
      return connection

} catch (error) {
 console.log(error) 
}
  }

  module.exports = {MySQLDriver}