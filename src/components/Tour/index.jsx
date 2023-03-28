import React, { useState } from "react";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  Rating,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddMarkMutation,
  useGetToursQuery,
} from "../../features/Tours/toursApiSlice";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const Tour = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { tour } = useGetToursQuery("toursList", {
    selectFromResult: ({ data }) => ({
      tour: data?.entities[id],
    }),
  });

  const [addMark, { isSuccess }] = useAddMarkMutation();

  const handleAddMark = async (e, value) => {
    if (value) {
      const addMarkToTour = { ...tour, marks: [value] };
      await addMark(addMarkToTour);
      if (isSuccess) {
        setOpen(true);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          border: "1px solid #ffffff",
          borderRadius: "16px",
          padding: "32px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">
            <FormattedMessage id="tour.title" /> {tour?.title}
          </Typography>
          <IconButton color="inherit" onClick={() => navigate("/")}>
            <HighlightOffIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography>
          <FormattedMessage id="tour.description" /> {tour?.tourDescription}
        </Typography>
        <Typography>
          <FormattedMessage id="tour.artist" /> {tour?.bandName}
        </Typography>
        <Typography variant="h6">
          <FormattedMessage id="tour.city.title" />
        </Typography>
        <Grid container>
          {tour?.tours.map((tour, index) => (
            <Grid
              item
              key={`${tour}-${index}`}
              sx={{
                border: "1px solid #ffffff",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
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
              <Typography>{tour.address}</Typography>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ display: "flex", alignItems: "end", marginTop: "8px" }}>
          <Box sx={{ marginRight: "8px", paddingBottom: "1px" }}>
            <Typography>{tour?.rating}</Typography>
          </Box>
          <Rating
            value={tour?.rating}
            sx={{ color: "#ffffff" }}
            onChange={(e, value) => handleAddMark(e, value)}
            emptyIcon={<StarOutlineIcon sx={{ color: "#ffffff" }} />}
          />

          <Box sx={{ marginLeft: "8px", paddingBottom: "1px" }}>
            <Typography>
              {tour?.reviews.length} <FormattedMessage id="reviews.total" />
            </Typography>
          </Box>
        </Box>
      </Box>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Box
            sx={{
              "& .MuiPaper-root": { display: "flex", alignItems: "center" },
            }}
          >
            <Alert onClose={handleClose} severity="success">
              <FormattedMessage id="toaster.add.review.success" />
            </Alert>
          </Box>
        </Snackbar>
      </Stack>
    </>
  );
};

export default Tour;
