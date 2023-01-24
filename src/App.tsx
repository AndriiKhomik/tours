import React, {FC, useEffect, useState} from "react";
import axios from "axios";
import {Button} from "@mui/material";

type Tour = {
  name: string
  _id: string
}

const App: FC = () => {
  const [tours, setTours] = useState<Tour[]>();

  useEffect(() => {
    axios.get("http://localhost:5000/bands").then(data => setTours(data.data));
  }, []);

  return (
    <div>
      {tours?.map((tour: Tour) => (
        <li key={tour._id}>{tour.name}</li>
      ))}
      <Button variant="contained">Click me</Button>
    </div>);

};

export default App;
