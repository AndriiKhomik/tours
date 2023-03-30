import React from "react";
import Header from "../../components/Header/Header";
import useAuth from "../../hooks/useAuth";

const PersonalPage = () => {
  const { name } = useAuth();
  console.log(name);
  return (
    <>
      <Header />
      <div>PersonalPage</div>
    </>
  );
};

export default PersonalPage;
