const router = require("express").Router();

const { getAllEvents,addEvent } = require("./controllers/event");
const { getAllUsers } = require("./controllers/user");

router.get("/events", getAllEvents);
router.post('/events',addEvent);
router.get("/users", getAllUsers);

module.exports = router;
