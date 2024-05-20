const db = require('../db/db')

const getorder = async(req,res) => {
    let {user_id} = req.body;
    let ORDERS = 'SELECT * FROM userorders WHERE user_id = $1;'
    try{
        db.query(ORDERS,[user_id],(err,result)=>{
            if(err)
                {
                    console.log(err);
                }
            else{
                console.log("orders sent successfully");
                res.status(200).send(result.rows)
            }
        })
    }  
    catch(err)
    {
        res.status(500).json({messge:"Internal server error"})
    }
}

module.exports = getorder;