const connection = require("../DB/connection");

var createCategory = (req, res)=>{
  const data = req.body;
  
  const query = "INSERT INTO productcategory(category_name) VALUES(?)";

  connection.query(query, [data.category], (err, result)=>{
    if(err){
      return res.status(400).json({
        message: 'Something went wrong',
        data: err
      })
    }
    
    res.status(200).json({
      message: 'Category is created successfully',
      data: result
    })
  })
  
}
module.exports = createCategory