const connection = require("../DB/connection");

var logout = (req, res)=>
{
  const query = "SELECT * FROM products ORDER BY id DESC";
  console.log("Logout is working");
  
//   connection.query(query, async (err, result)=>
//   {
//     if(err){
//       res.status(400).json({
//         message:"Some error occure",
//         error: err
//       });
//       return;
//     }
    
//     if (result.length > 0){
//       res.status(200).json({
//         message:'Data fetched sucessfully',
//         data: result
//       })
//     }
//   })
}


module.exports = logout;