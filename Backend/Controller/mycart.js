const connection = require("../DB/connection");

var myCart = (req, res)=>
{
  const user = req.body;
  const query = 'CALL getMyProducts(?)';
  connection.query(query, [user.UserId], async (err, result)=>
  {
    if(err){
      res.status(400).json({
        message:"Some error occure",
        error: err
      });
      return;
    }
    
    res.status(200).json({
      message:'Products are fetched successfully',
      data: result
    })
  })
}


module.exports = myCart;