import React from "react";
import { useGetToursQuery } from "./toursApiSlice";
import Tour from "./Tour";
import { Box, Typography } from "@mui/material";
import Header from "../../components/Header/Header";
import { FormattedMessage } from "react-intl";

const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
};

const ToursList = () => {
  const {
    data: tours,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetToursQuery("toursList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content = null;
  if (isSuccess) {
    const { ids, entities } = tours;
    const data = ids.filter((tourId) => entities[tourId]);
    content = data.map((tourId) => <Tour key={tourId} tourId={tourId} />);
  }

  return (
    <>
      <Header />
      <Typography variant="h4" sx={{ marginBottom: "16px" }}>
        <FormattedMessage id="title.tours" />
      </Typography>
      {isLoading && <p>Loading...</p>}
      {isError && <p>{error?.data?.message}</p>}
      {isSuccess && <Box sx={styles}>{content}</Box>}
    </>
  );
};

export default ToursList;
