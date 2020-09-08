
module.exports.getAllEvents = async (req,res)=>{
    try{
        const {db} = req.app.locals
        const data = await db.query("SELECT c.id AS chapterId ,c.name AS chapterName ,e.id as eventid ,e.name as eventname,e.summary,e.description,e.date,e.imageurl FROM events e JOIN student_chapter c ON c.id=e.chp_id")
        res.send({data:data.rows})
    }catch(err){
        console.log(err)
        res.status(500).send({message:'We are expreincing issues please try again or contact the technical team'})
    }
}

module.exports.addEvent = async (req,res)=>{
    try{
        const {db} = req.app.locals
        const data = await db.query(`INSERT INTO public.events(
            chp_id, name, summary, description, date, imageurl)
            VALUES (${req.body.chpid},'${req.body.name}', '${req.body.summary}', '${req.body.description}', '${req.body.time}', '${req.body.imgUrl}')`)
            console.log(data)
            res.send("lol")
    }catch(err){
        console.log(err)
        res.status(500).send({message:'We are expreincing issues please try again or contact the technical team'})
    }
}
