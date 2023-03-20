import React from "react";
import { useGetToursQuery } from "./toursApiSlice";
import {
  Box,
  Card,
  CardContent,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Tour = ({ tourId }) => {
  const { tour } = useGetToursQuery("toursList", {
    selectFromResult: ({ data }) => ({
      tour: data?.entities[tourId],
    }),
  });

  const StyledLink = styled(Link)({
    textDecoration: "none",
  });

  return (
    <StyledLink to={`tours/${tour.id}`}>
      <Card sx={{ border: "1px solid #fff", borderRadius: "8px" }}>
        <CardContent>
          <Typography>
            <FormattedMessage id="tour.title" /> {tour.title}
          </Typography>
          <Typography>
            <FormattedMessage id="tour.description" /> {tour.tourDescription}
          </Typography>
          <Typography>
            <FormattedMessage id="tour.artist" /> {tour.band}
          </Typography>
          {/* <img src={tour.image} alt={tour.image} /> */}
          <Typography variant="h6">
            <FormattedMessage id="tour.city.title" />
          </Typography>
          <ul>
            {tour.tours.map((tour, index) => (
              <li key={`${tour}-${index}`}>
                <Typography>{tour.city}</Typography>
                <Typography>
                  {new Date(tour.tourDate).toLocaleString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </Typography>
              </li>
            ))}
          </ul>
          <Box sx={{ display: "flex", alignItems: "end" }}>
            <Box sx={{ marginRight: "8px", paddingBottom: "1px" }}>
              <Typography>{tour.rating}</Typography>
            </Box>
            <Rating
              readOnly
              value={tour.rating}
              precision={0.5}
              sx={{ color: "#ffffff" }}
              emptyIcon={<StarOutlineIcon sx={{ color: "#ffffff" }} />}
            />
            <Box sx={{ marginLeft: "8px", paddingBottom: "1px" }}>
              <Typography>
                {tour.reviews.length} <FormattedMessage id="reviews.total" />
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </StyledLink>
  );
};

export default Tour;
