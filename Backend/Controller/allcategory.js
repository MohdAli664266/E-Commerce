const connection = require("../DB/connection");

var allcategory = (req, res)=>{
  const query = "SELECT * FROM productcategory";

  connection.query(query, (err, result)=>{
    if(err){
      return res.status(400).json({
        message: 'Something went wrong',
        data: err
      })
    }
    
    res.status(200).json({
      message: 'Category is fetched successfully',
      data: result
    })
  })
  
}
module.exports = allcategory