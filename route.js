const router = require("express").Router();

const { getAllEvents } = require("./controllers/event");
const { getAllUsers } = require("./controllers/user");
const { addUser } = require("./controllers/user");

router.get("/events", getAllEvents);
router.get("/users", getAllUsers);
router.post("/users",addUser)

module.exports = router;
