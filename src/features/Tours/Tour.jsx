import React from "react";
import { useGetToursQuery } from "./toursApiSlice";
import { Card, CardContent, Typography } from "@mui/material";

const Tour = ({ tourId }) => {
  const { tour } = useGetToursQuery("toursList", {
    selectFromResult: ({ data }) => ({
      tour: data?.entities[tourId],
    }),
  });

  return (
    <Card sx={{ border: "1px solid #fff", borderRadius: "8px" }}>
      <CardContent>
        <Typography>{tour.title}</Typography>
        <Typography>{tour.tourDescription}</Typography>
        <Typography>{tour.band}</Typography>
        {tour.cities.map((city, index) => (
          <Typography key={`${city}-${index}`}>{city}</Typography>
        ))}
        <Typography>{tour.date}</Typography>
      </CardContent>
    </Card>
  );
};

export default Tour;
