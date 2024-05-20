

const data = require('../db/data')

const sendstocks = (req,res) => {
    try{
        res.status(200).send(data);
    }
    catch(error){
        res.status(500).json({messge:"Internal server error"})
    }
}

module.exports = sendstocks;