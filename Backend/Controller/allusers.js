const connection = require("../DB/connection");

const allusers = async (req, res)=>{
    connection.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error executing query:', err.stack);
        return;
      }
      res.status(200).json({
        message:"success",
        data:results
      });
    });
  }

module.exports = allusers

