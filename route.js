const router = require("express").Router();

const { getAllEvents } = require("./controllers/event");
const { getAllUsers } = require("./controllers/user");

router.get("/events", getAllEvents);
router.get("/users", getAllUsers);

module.exports = router;
