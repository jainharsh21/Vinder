module.exports.addFeedbackQuestions = async (req,res)=>{
    try{
        const {db} = req.app.locals
        // console.log(JSON.stringify(req.body.question))
        const sql = `INSERT INTO public.feedbacks(event_id,question) VALUES (${req.body.eventId},'${req.body.question}')`
        console.log(sql)
        const data = await db.query(`INSERT INTO public.feedbacks(event_id,question) VALUES (${req.body.eventId},'${JSON.stringify(req.body.question)}')`)
        console.log(data)
        res.send({message:"Question Added"})
    }catch(err){
        console.log(err)
        res.status(500).send({message:'We are expreincing issues please try again or contact the technical team'})
    }
}


module.exports.addFeedbackAnswer = async (req,res)=>{
    try{
        const {db} = req.app.locals
        console.log(`INSERT INTO public.feedbacks(feedback_id,user_id,answers) VALUES (${req.body.feedbackId},${req.body.userId},'${JSON.stringify(req.body.answers)}'`)
        const data = await db.query(`INSERT INTO public.feedbacks_answers(feedback_id,user_id,answers) VALUES (${req.body.feedbackId},${req.body.userId},'${JSON.stringify(req.body.answers)}')`)
        console.log(data)
        res.send({message:"Answer Added"})
    }catch(err){
        console.log(err)
        res.status(500).send({message:'We are expreincing issues please try again or contact the technical team'})
    }
}
