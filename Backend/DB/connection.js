const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Royalroy@6642',
  database: 'royalroy',
});

connection.connect((err, res)=>
{
  if(err)
  {
    console.log("Connection Error:", err);
  }else
  {
    console.log("Conection Success");
  }
})

module.exports = connection;