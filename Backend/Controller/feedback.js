const connection = require("../DB/connection");

var feedback = (req, res)=>
{
  const {user,product_id, feedbackText} = req.body;
  
  const query = 'INSERT INTO feedback(user_id, product_id, feedbackText) VALUES(?,?,?)';
  connection.query(query, [user.UserId, product_id, feedbackText], async (err, result)=>
  {
    if(err){
      res.status(400).json({
        message:"Some error occure",
        error: err
      });
      return;
    }
    
    res.status(200).json({
      message:'Thank you for your time',
      data: result
    })
  })
}


module.exports = feedback;