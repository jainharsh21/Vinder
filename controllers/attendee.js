module.exports.addAttendee = async (req, res) => {
  try {
    const { db } = req.app.locals;
    const data = await db.query(`INSERT INTO public.attendees(
        event_id, stu_id, didattend)
        VALUES ('${req.body.event_id}', '${req.body.stu_id}', ${req.body.didAttend});`);
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
