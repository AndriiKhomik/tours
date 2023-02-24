import React from "react";
import { useGetToursQuery } from "./toursApiSlice";
import Tour from "./Tour";
import { Grid } from "@mui/material";

const Tours = () => {
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
    const data = ids.filter((tourId: string) => entities[tourId]);
    content = data.map((tourId: string) => (
      <Tour key={tourId} tourId={tourId} />
    ));
  }

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {/*@ts-ignore*/}
      {isError && <p>{error?.data?.message}</p>}
      {isSuccess && (
        <Grid container spacing={1}>
          {content}
        </Grid>
      )}
    </>
  );
};

export default Tours;
