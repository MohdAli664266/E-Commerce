const connection = require("../DB/connection");

var ProductFeedback = (req, res)=>
{
  const {prod_id} = req.body;
  const query = 'call ProductFeedback(?)';
  connection.query(query, [prod_id], async (err, result)=>
  {
    if(err){
      res.status(400).json({
        message:"Some error occure",
        error: err
      });
      return;
    }
    
    res.status(200).json({
      message:'Product feedback fetched successfully',
      data: result
    })
  })
}


module.exports = ProductFeedback;