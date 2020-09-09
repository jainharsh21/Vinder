module.exports.addMate = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const data = await db.query(`INSERT INTO public.mates(
        user1_id, user2_id, accepted)
        VALUES (${req.body.user1_id},${req.body.user2_id},${req.body.accepted});`);
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
