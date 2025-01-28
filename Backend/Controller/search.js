const connection = require("../DB/connection");

var search = (req, res)=>{
  var data = req.body;
  var data = `%${data.searchTerm}%`
  
  const query = "SELECT * FROM products WHERE name like ? OR brand like ? OR description like ?";
  
  connection.query(query,[data, data, data], (err, result)=>{
    if(err){
      return res.status(400).json({
        message: 'Something went wrong',
        data: err
      })
    }
    
    if(result.length > 0)
    {
        res.status(200).json({
            message: 'Data fetched successfully',
            data: result
          })
    }else{
        res.status(200).json({
            message: 'Product is not found',
            data: result
          })
    }
  })
  
}
module.exports = search