import Modal from "./Modal";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EventList = ({ event, events, setEvents }) => {
  let [isOpen, setIsOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/event/${event._id}`, {
        liked,
      })
      .then((res) => {
        console.log(res.data);
        // setLiked(!liked);
      })
      .catch((err) => {
        console.log("error", err.response.data.err.errors);
        // setErrors(err.response.data.err.errors);
      });
  };
  const deleteEvent = (id) => {
    axios
      .delete(`http://localhost:8000/api/event/${id}`)
      .then((res) => {
        console.log(events);
        setEvents(events.filter((event) => event._id !== id));
        navigate("/events");
      })
      .catch((err) => console.log(err));
  };

  console.log(liked);
  return (
    <>
      <div onSubmit={handleUpdate} class="mt-4 flex justify-center">
        <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
          <img
            class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={event.eventUrl}
            alt=""
          />
          <div class="p-6 flex flex-col justify-start">
            <h5 class="text-gray-900 text-xl font-medium mb-2">
              {event.eventTitle}
            </h5>
            <p class="text-gray-700 text-base mb-4">{event.eventType}</p>
            <p class="text-gray-600 text-xs">Created by: {event.name}</p>
            <div>
              <button onClick={() => setIsOpen(true)}>Details</button>
              <div>
                <svg
                  onClick={(e) => deleteEvent(event._id)}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div>
                <svg
                  onClick={() => navigate(`/event/edit/${event._id}`)}
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                </svg>
              </div>
              <button onSubmit={handleUpdate}>
                <svg
                  onClick={(e) => setLiked(!liked)}
                  className={`w-6 h-6 ${liked && "text-rose-400"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                {event.liked}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && <Modal event={event} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default EventList;
