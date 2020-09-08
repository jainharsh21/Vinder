const router = require("express").Router();

const { getAllEvents,addEvent } = require("./controllers/event");
const { getAllUsers, addUser } = require("./controllers/user");
const {addAttendee,getAllAttendeesFromEvent} = require("./controllers/attendee");
const {
  getAllStudentChapters,
  addStudentChapter,
} = require("./controllers/student_chapter");

router.get("/events", getAllEvents);
router.post('/events',addEvent);
router.get("/users", getAllUsers);
router.get("/student_chapters", getAllStudentChapters);
router.get("/attendees/:event_id", getAllAttendeesFromEvent);
router.post("/users", addUser);
router.post("/student_chapters", addStudentChapter);
router.post("/attendees", addAttendee);

module.exports = router;
