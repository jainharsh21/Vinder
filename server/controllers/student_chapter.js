const { hash, compare } = require("bcryptjs");

module.exports.getAllStudentChapters = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const data = await db.query("SELECT * FROM student_chapter");
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

module.exports.addStudentChapter = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const hashPass = await hash(req.body.password, 2);
    const data = await db.query(`INSERT INTO public.student_chapter(
        name, description, password, imageurl)
        VALUES ('${req.body.name}', '${req.body.description}', '${req.body.password}', '${req.body.imageUrl}');`);
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
