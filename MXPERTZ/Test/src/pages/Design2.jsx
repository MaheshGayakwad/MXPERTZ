import { Box, Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ChatState } from "../../Context/ChatProvider";

import { useNavigate } from "react-router-dom";

const Design2 = () => {
  const { id } = ChatState();
  let [story, setStory] = useState("");

  const Nav = useNavigate();

  const handleStory = async () => {
    let allData = await axios.get(
      `https://child.onrender.com/api/sciencefiction/${id}`
    );

    setStory(allData.data.Title);
  };

  useEffect(() => {
    if (id === " ") {
      Nav("/design1");
    }

    handleStory();
  }, []);

  const handleClick = () => {
    Nav("/design1");
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      mt={50}
      bgImage={
        "linear-gradient(to right top, #d8d8d8, #d3d3d3, #cecece, #c9c9c9, #c4c4c4)"
      }
    >
      <Text m={50} fontFamily={"cursive"} fontSize={"20"}>
        {story}
      </Text>

      <Button colorScheme="blue" onClick={handleClick}>
        Back to all Stories
      </Button>
    </Box>
  );
};

export default Design2;
