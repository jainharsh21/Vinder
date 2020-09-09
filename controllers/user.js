const { hash, compare } = require("bcryptjs");

const {generateToken} = require('../jwtHelper')

module.exports.getAllUsers = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const data = await db.query("SELECT * FROM users");
    console.log(data);
    res.send(data.rows);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        "We are expreincing issues please try again or contact the technical team",
    });
  }
};

module.exports.addUser = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const hashPass = await hash(req.body.password, 2);
    const data = await db.query(`INSERT INTO public.users(
    name, email, password, bio, sex, imageurl)
    VALUES ( '${req.body.name}','${req.body.email}' ,'${hashPass}' ,'${req.body.bio}' ,'${req.body.sex}' ,'${req.body.imageurl}' )  
    RETURNING id;`);
    delete req.body.password
    const token = generateToken({id:data.rows.id,...req.body})
    res.send({token});
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        "We are expreincing issues please try again or contact the technical team",
    });
  }
};


module.exports.login = async (req,res)=>{
  try{
    const { db } = req.app.locals;
    const { email, password,name } = req.body; 
    const sql = `SELECT id,password FROM ${email?'users':'student_chapter'} WHERE ${email?'email=':'name='}'${email?email:name}'`
    const userData = await db.query(sql)
    console.log(userData)
    const doesPassMatch = await compare(password, userData.rows[0].password);
    if(doesPassMatch){
      delete req.body.password
      const token = generateToken({id:userData.rows[0].id,...req.body})
      return res.send({token})
    }
    res.status(400).send({message:"Unauthorized"})
  }catch(err){
    console.log(err)
    res.status(500).send({message:'We are expreincing issues please try again or contact the technical team'})
  }
}