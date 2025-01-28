const connection = require("../DB/connection");

var deleted = (req, res)=>{
  const {prod_id, user_id} = req.body;
  
  const query = "DELETE FROM cart WHERE product_id = ? AND user_id = ?";

  connection.query(query,[prod_id, user_id], (err, result)=>{
    if(err){
      return res.status(400).json({
        message: 'Something went wrong',
        data: err
      })
    }
    
    res.status(200).json({
      message: 'Dropped successfully',
      data: result
    })
  })
  
}
module.exports = deleted