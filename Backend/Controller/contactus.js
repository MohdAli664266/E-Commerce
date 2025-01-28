const connection = require("../DB/connection");

var contactus = (req, res)=>{
  const data = req.body;
  
  const query = "INSERT INTO contact_us(first_name, last_name, email, message) VALUES(?, ?, ?, ?)";

  connection.query(query,[data.first, data.last, data.email, data.message], (err, result)=>{
    if(err){
      return res.status(400).json({
        message: 'Something went wrong',
        data: err
      })
    }
    
    res.status(200).json({
      message: 'Thank you, We will contact you ASAP',
      data: result
    })
  })
  
}
module.exports = contactus