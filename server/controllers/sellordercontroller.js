

const db = require('../db/db')

const sellorder = (req,res) => {
    let orderid = req.body.order.order_id;
    let userid = req.body.order.user_id;
    let deletequery = `DELETE FROM userorders WHERE order_id = $1;`
    let updatequery = `UPDATE userinfo SET wallet = COALESCE(wallet, 0) + $1 WHERE user_id = $2;`
    try{
        db.query(updatequery,[req.body.order.stock_price,userid],(err,result)=>{
            if(err)
                {
                    console.log(err);
                }
            else{
                db.query(deletequery,[orderid],(err,result)=>{
                    if(err)
                        {
                            console.log(err);
                        }
                        else{
                            console.log("deleted");
                            res.status(200).send("Successfully sold the stock")
                        }
                })
                
            }
        })
    }
    catch(err)
    {
        res.status(500).json({messge:"Internal server error"})
    }
}

module.exports = sellorder;