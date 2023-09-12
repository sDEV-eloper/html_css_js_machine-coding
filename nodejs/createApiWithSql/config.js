//Node js GET API with MYSQL

// Make Config file
// Make router for API
// Get data from MySQL

const mysql=require('mysql2')
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:"college"
})
//con=connection
con.connect((err)=>{
    if(err)
    console.warn(err)
})

module.exports=con;