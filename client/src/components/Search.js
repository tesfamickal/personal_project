import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const Search = (props) => {
  const { id } = useParams();
  const [event, setEvent] = useState("");
  useEffect(() => {
    axios
      .get(
        `https://api.seatgeek.com/2/events?parent_id=${id}&client_id= ${process.env.REACT_APP_CLIENT_ID}`
      )
      .then((res) => {
        console.log(res.data);
        setEvent(res.data);
      });
  }, [id]);
  return <div>{id}</div>;
};

export default Search;
