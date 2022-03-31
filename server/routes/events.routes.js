const EventsController = require("../controllers/events.controller");
module.exports = (app) => {
  app.get("/api/events", EventsController.findAll);
  app.post("/api/event", EventsController.createEvent);
  app.get("/api/event/:id", EventsController.findOneEvent);
  app.put("/api/event/:id", EventsController.updateEvent);
  app.delete("/api/event/:id", EventsController.deleteEvent);
};
