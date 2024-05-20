

require("dotenv").config()
const stripe = require('stripe')(process.env.STOCK_STRIPE_KEY);
const {v4:uuidv4} = require("uuid")
const db = require("../db/db")

const checkoutstripe = async(req,res) => {
    const YOUR_DOMAIN = 'https://stockinvesto.netlify.app';
    const item = req.body.stock; 
    const line_items = [{
        price_data: {
            currency: "usd",
            product_data: {
                name: item.name,
                images: [item.img],
                metadata: {
                    symbol: item.symbol
                }
            },
            unit_amount: Math.round(item.prices[0].current * 100), 
        },
        quantity: 1,
    }];
    try{
    const session = await stripe.checkout.sessions.create({
        line_items,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/order`,
        cancel_url: `${YOUR_DOMAIN}/stock`,
    });


    let INSERTQUERY = "INSERT INTO userorders (user_id, stock_name, stock_symbol, stock_img, stock_price, order_id) VALUES ($1,$2,$3,$4,$5,$6);"
    let UPDATEQUERY = "UPDATE userinfo SET wallet = COALESCE(wallet, 0) - $1 WHERE user_id = $2;"
    let uuid = uuidv4()
    let values = [
        req.body.userid,
        item.name,
        item.symbol,
        item.img,
        Math.round(item.prices[0].current * 100),
        uuid
    ]

    db.query(INSERTQUERY,values,(err,result)=>{
        if(err)
            {
                console.log(err);
                res.status(500).send({ message: "Error placing order" });

            }
        else{
            db.query(UPDATEQUERY,[Math.round(item.prices[0].current * 100),  req.body.userid],(err,result)=>{
                if(err)
                    {
                        console.log(err);
                    }
                    else{
                        console.log("Order placed successfully");
                        res.status(200).send({url:session.url});
                    }
            })
         
        }
    })
}catch(err){
    console.error("Error creating Stripe session:", err);
        res.status(500).send({ message: "Error creating Stripe session" });
}


}
module.exports = checkoutstripe;