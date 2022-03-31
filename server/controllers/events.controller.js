const Event = require("../models/event.model");

module.exports = {
  findAll: (req, res) => {
    Event.find({})
      .then((events) => {
        console.log(events);
        res.json(events);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  findOneEvent: (req, res) => {
    // const {params} = req;
    Event.findById({ _id: req.params.id })
      .then((event) => {
        res.json(event);
      })
      .catch((err) => {
        res.status(400).json(err);
        console.log(err);
      });
  },

  createEvent: (req, res) => {
    Event.create(req.body)
      .then((event) => res.json({ event }))
      .catch((err) => res.status(400).json({ err }));
  },

  updateEvent: (req, res) => {
    const { params, body } = req;
    console.log(body);
    Event.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((updateEvent) => {
        res.json({ Event: updateEvent });
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  },

  deleteEvent: (req, res) => {
    const { params } = req;
    Event.deleteOne({ _id: params.id })
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  },
};
