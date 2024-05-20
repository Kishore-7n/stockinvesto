
const db = require('../db/db')

const login = (req,res) => {
    let QUERY = `SELECT * FROM userinfo WHERE user_email = $1 and user_password = $2`;
    let email = req.body.email;
    let password = req.body.password;
    try{
        db.query(QUERY,[email,password],(err,results)=>{
            if(err) console.log(err);
            else{
                if(results.rows.length>0 && results.rows[0].user_email===email && results.rows[0].user_password===password )
                {
                    console.log("user logged in successfully");
                    res.status(200).send(results.rows[0]);
                }
                else{
                    console.log("Invalid credentials");
                    res.status(401).json({message:"Invalid credentials"});
                }
            }
        })
    }
    catch(error){
        console.log(error)
        res.status(500)({"Error":"Internal server error"})
    }
    
}

module.exports = login