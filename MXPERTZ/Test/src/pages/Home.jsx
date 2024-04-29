import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let [id, setId] = useState();

  const Nav = useNavigate();

  const handleClick1 = () => {
    Nav("/design1");
  };

  const handleClick2 = () => {
    Nav("/design2");
  };

  return (
    <Box display={"flex"} alignContent={"center"} justifyContent={"center"}>
      <Button onClick={handleClick1}>Design1</Button>
      <Button onClick={handleClick2}>Design2</Button>
    </Box>
  );
};

export default Home;
