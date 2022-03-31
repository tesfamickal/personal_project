import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";

const EditEvent = () => {
  const { id } = useParams();
  const [eventTitle, setTitle] = useState("");
  const [attending, setAttending] = useState(false);
  const [eventType, setType] = useState("");
  const [name, setName] = useState("");
  const [eventUrl, setUrl] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/event/${id}`)
      .then((res) => {
        console.log(res.data.attending);
        setName(res.data.name);
        setType(res.data.eventType);
        setAttending(res.data.attending);
        setTitle(res.data.eventTitle);
        setUrl(res.data.eventUrl);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8000/api/event/${id}`, {
        eventTitle,
        attending,
        eventType,
        name,
        eventUrl,
      })
      .then((res) => {
        console.log(res.data);
        setTitle("");
        setType("");
        // setAttending("");
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
      <form onSubmit={handleUpdate}>
        <div class="bg-indigo-50 min-h-screen md:px-20 pt-6">
          <div class=" bg-white rounded-md px-6 py-10 max-w-2xl mx-auto">
            <h1 class="text-center text-2xl font-bold text-gray-500 mb-10">
              EDIT EVENT
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
                <div className="py-8 flex item-center justify-center">
                  <label for="email" class="text-lx font-serif">
                    RSVP:
                  </label>
                  <Switch
                    checked={attending}
                    onChange={setAttending}
                    className={`${attending ? "bg-teal-900" : "bg-gray-200"}
          relative inline-flex flex-shrink-0 h-8 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span
                      aria-hidden="true"
                      className={`${
                        attending ? "translate-x-8" : "translate-x-0"
                      }
            pointer-events-none inline-block h-7 w-7 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                    />
                  </Switch>
                </div>
              </div>
              <button class=" px-6 py-2 mx-auto block rounded-md text-lg font-semibold text-indigo-100 bg-indigo-600  ">
                EDIT EVENT
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditEvent;
