import { useState, useEffect } from "react";
import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { Navigate, useNavigate } from "react-router-dom";

const AddEvent = (props) => {
  // const [categories, setCategories] = useState("");
  // const [events, setEvents] = useState([]);
  const [eventTitle, setTitle] = useState("");
  const [attending, setAttending] = useState(false);
  const [eventType, setType] = useState("");
  const [name, setName] = useState("");
  const [eventUrl, setUrl] = useState("");
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/event", {
        eventTitle,
        attending,
        eventType,
        name,
        eventUrl,
        liked,
      })
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setType("");
        setAttending("");
        setName("");
        setUrl("");
        navigate("/events");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
          <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
              ADD EVENT
            </h1>
            <div class="space-y-4">
              <div>
                <label for="title" class="text-lx font-serif">
                  Title:
                </label>
                <input
                  type="text"
                  placeholder="title"
                  id="title"
                  class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  value={eventTitle}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>
              <div>
                <label for="description" class="block mb-2 text-lg font-serif">
                  Type of Event:
                </label>
                <textarea
                  id="type"
                  cols="30"
                  rows="10"
                  placeholder="whrite here.."
                  class="w-full font-serif  p-4 text-gray-600 bg-indigo-50 outline-none rounded-md"
                  value={eventType}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                ></textarea>
              </div>
              <div>
                <label for="name" class="text-lx font-serif">
                  Name:
                </label>
                <input
                  type="text"
                  placeholder="name"
                  id="name"
                  class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div>
                <label for="name" class="text-lx font-serif">
                  Add image for Event:
                </label>
                <input
                  type="text"
                  placeholder="name"
                  id="name"
                  class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  value={eventUrl}
                  onChange={(e) => {
                    setUrl(e.target.value);
                  }}
                />
              </div>
              <div>
                <label for="email" class="text-lx font-serif">
                  RSVP:
                </label>
                <input
                  type="radio"
                  placeholder="name"
                  id="rsvp"
                  class="ml-2 outline-none py-1 px-2 text-md border-2 rounded-md"
                  value={attending}
                  onChange={(e) => {
                    setAttending(e.target.value);
                  }}
                />
              </div>
              <button class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">
                ADD EVENT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
