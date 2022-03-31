import "./App.css";
import DisplayAll from "./components/DisplayAll";
import Nav from "./components/Nav";
import AddEvent from "./components/AddEvent";
import EditEvent from "./components/EditEvent";
import Favorites from "./components/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [events, setEvents] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route
            path="/"
            element={<AddEvent events={events} setEvents={setEvents} />}
          />
          <Route
            path="/events"
            element={<DisplayAll events={events} setEvents={setEvents} />}
          />
          <Route
            path="/event/edit/:id"
            element={<EditEvent events={events} setEvents={setEvents} />}
          />
          <Route
            path="/favorites"
            element={<Favorites events={events} setEvents={setEvents} />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Search /> */}
      {/* <SportsModal /> */}
    </div>
  );
}

export default App;
