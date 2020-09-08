const router = require("express").Router();

const { getAllEvents } = require("./controllers/event");
const { getAllUsers, addUser } = require("./controllers/user");
const {
  getAllStudentChapters,
  addStudentChapter,
} = require("./controllers/student_chapter");

router.get("/events", getAllEvents);
router.get("/users", getAllUsers);
router.get("/student_chapters", getAllStudentChapters);
router.post("/users", addUser);
router.post("/student_chapters", addStudentChapter);

module.exports = router;
