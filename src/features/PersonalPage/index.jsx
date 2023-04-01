import React from "react";
import Header from "../../components/Header/Header";
import useAuth from "../../hooks/useAuth";
import { useGetUsersQuery } from "./usersApiSlice";
import { Box, Typography } from "@mui/material";

const PersonalPage = () => {
  const { id } = useAuth();
  const { user } = useGetUsersQuery("usersList", {
    selectFromResult: ({ data }) => ({
      user: data?.filter((item) => item._id === id)[0],
    }),
  });

  console.log(user);
  return (
    <>
      <Header />
      <Box
        sx={{
          padding: "24px",
          border: "1px solid white",
          borderRadius: "24px",
        }}
      >
        <Typography>{user?.name}</Typography>
        <Typography>{user?.foundedDate}</Typography>
        {user?.albums.length &&
          user.albums.map((album) => <Typography>{album}</Typography>)}
      </Box>
    </>
  );
};

export default PersonalPage;
