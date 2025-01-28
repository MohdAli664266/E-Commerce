const connection = require("../DB/connection");

var signup = (req, res)=>
{
  const {username, email, password} = req.body;
  const query = "SELECT * FROM users WHERE username = ?";
  connection.query(query, username, async (err, result)=>
  {
    if(err){
      res.status(400).json({
        message:"Some error occure",
        error: err
      });
      return;
    }
    
    if (result.length === 0){
      await createUser(username, email, password)
      .then(message=>res.status(200).json({message:"User signed up successfully", data:message}));
    }else
    {
      res.status(400).json({
        message: "User already exists",
      });
    }
  })
}

async function createUser(username,email, password){
  return new Promise((resolve, reject)=>{
    const query = "INSERT INTO users(username, email, passwordhash) values(?,?,?)";
    const values = [username, email, password];
    connection.query(query, values, (err, result)=>{
      if(err){
        return reject(err.message);
      }else
      {
        return resolve(result.affectedRows);
      }
    })
  });  
}

module.exports = signup;