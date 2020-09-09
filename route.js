const router = require("express").Router();

const { getAllEvents,addEvent,getEventOfChpt } = require("./controllers/event");
const { getAllUsers, addUser } = require("./controllers/user");
const {addAttendee,getAllAttendeesFromEvent} = require("./controllers/attendee");
const {
  getAllStudentChapters,
  addStudentChapter,
} = require("./controllers/student_chapter");

const { addFeedbackQuestions,addFeedbackAnswer } = require('./controllers/feedback')

router.get("/events", getAllEvents);
router.get('/events/:chpid',getEventOfChpt);
router.post('/events',addEvent);
router.get("/users", getAllUsers);
router.get("/student_chapters", getAllStudentChapters);
router.get("/attendees/:event_id", getAllAttendeesFromEvent);
router.post("/users", addUser);
router.post("/student_chapters", addStudentChapter);
router.post("/attendees", addAttendee);
router.post('/feedback',addFeedbackQuestions);
router.post('/answer',addFeedbackAnswer)
module.exports = router;
