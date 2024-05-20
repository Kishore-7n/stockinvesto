
const db = require('../db/db')
const getuser = (req,res) => {
    let userid = req.body.user_id;
    let selectquery = "select * from userinfo where user_id = $1;"

    db.query(selectquery,[userid],(err,result)=>{
        if(err)
            {
                console.log(err);
            }
        else{
            res.status(200).send(result.rows)
        }
    })
}

module.exports = getuser;