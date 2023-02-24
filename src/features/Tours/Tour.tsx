import React from "react";
import { useGetToursQuery } from "./toursApiSlice";
import { Card, CardContent, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";

const Tour = ({ tourId }: { tourId: string }) => {
  const { tour } = useGetToursQuery("toursList", {
    selectFromResult: ({ data }) => ({
      tour: data?.entities[tourId],
    }),
  });

  return (
    <Card>
      <FormattedMessage id="hello" />
      <CardContent>
        <Typography>{tour.title}</Typography>
        <Typography>{tour.tourDescription}</Typography>
        <Typography>{tour.band}</Typography>
        <Typography>{tour.date}</Typography>
      </CardContent>
    </Card>
  );
};

export default Tour;
