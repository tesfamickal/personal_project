import { useState, useEffect } from "react";
import axios from "axios";
import EventList from "./EventList";
import Modal from "./Modal";
const DisplayAll = (props) => {
  const { events, setEvents } = props;
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/events")
      .then((res) => {
        console.log(res.data);
        setEvents(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {events.map((event, index) => (
        <EventList
          key={index}
          events={events}
          setEvents={setEvents}
          event={event}
        />
      ))}
    </>
  );
};

export default DisplayAll;
