const connection = require("../DB/connection");
var login = (req, res)=>{
  const {username, email, password} = req.body;
  const query = "SELECT * FROM users WHERE (username = ? OR email = ?)";
  
  connection.query(query,[username, email], (err, results) => {
    if (err) {
      res.status(400).json({
        message:"Some error occure",
        error: err
      });
      return;
    }
    if(results[0].PasswordHash==password)
    {
      res.status(200).json({
        message:"Login successfully",
        data: results[0]
      });
    }else{
      res.status(400).json({
        message:"Invalid username or password",
        data: results
      });
    }
  });
}

module.exports = login