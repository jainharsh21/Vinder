
module.exports.getAllEvents = async (req,res)=>{
    try{
        res.send("hello")
    }catch(err){
        console.log(err)
        res.status(500).send({message:'We are expreincing issues please try again or contact the technical team'})
    }
}

