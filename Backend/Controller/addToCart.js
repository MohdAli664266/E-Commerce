const connection = require("../DB/connection");

var addToCart = (req, res)=>
{
  const {id, user} = req.body;
  const query = 'call AddToCart(?, ?, @Message)';  
  connection.query(query, [user.UserId, id], async (err, result)=>
  {
    if(err){
      res.status(400).json({
        message:"Some error occure",
        error: err
      });
      return;
    }
    
    res.status(200).json({
      message:'Product is inserted into cart successfully',
      data: result
    })
  })
}


module.exports = addToCart;