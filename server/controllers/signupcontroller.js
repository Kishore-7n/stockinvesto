const db = require('../db/db')
const { v4: uuidv4 } = require('uuid');
const signup = (req,res) => {
    try{

        let email = req.body.email;
        let SELECT_QUERY = `SELECT * FROM userinfo WHERE user_email = $1`;
        db.query(SELECT_QUERY,[email],(err,result)=>{
            if(err) console.log(err);
            else{
                if(result.rows.length>0 && result.rows[0].user_email===email )
                { 
                    console.log("user already exist");
                    res.status(409).json({message:"user already exist"});
                }
                else{
                    let uid = uuidv4();
                    let values = [req.body.name,
                        req.body.email,
                        req.body.password,
                        uid,
                        25000
                    ]
                    
                    let QUERY = "INSERT INTO userinfo (username,user_email,user_password,user_id,wallet) VALUES ($1,$2,$3,$4,$5);"
                    db.query(QUERY,values,(err,results)=>{
                        if(err)
                        {
                                console.log(err);
                        }
                        else{
                            console.log("user signed up successfully");
                            res.status(200).json({message:"user signed up successfully"});
                        }
                    })
                }
                
            }
        })
    }
    catch(err){
        console.log(err);
        res.status(500)({"Error":"Internal server error"})
    }
}


module.exports = signup;