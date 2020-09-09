const { hash, compare } = require("bcryptjs");

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
    const hashPass =await hash(req.body.password, 2);
    const data = await db.query(`INSERT INTO public.users(
         name, email, password, bio, sex, imageurl)
        VALUES ( '${req.body.name}','${req.body.email}' ,'${hashPass}' ,'${req.body.bio}' ,'${req.body.sex}' ,'${req.body.imageUrl}' );`);
    console.log(data);
    res.send(req.body);
  } catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        "We are expreincing issues please try again or contact the technical team",
    });
  }
};
