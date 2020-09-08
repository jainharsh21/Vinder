module.exports.getAllUsers = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const data = await db.query("SELECT * FROM users");
    console.log(data);
    res.send("lol");
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send({
        message:
          "We are expreincing issues please try again or contact the technical team",
      });
  }
};
