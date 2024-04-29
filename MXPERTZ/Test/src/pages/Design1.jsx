import React, { useEffect, useState, useContext } from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import axios, { all } from "axios";
import { ChatState } from "../../Context/ChatProvider";
import { useNavigate } from "react-router-dom";

const Design1 = (prop) => {
  let [allData, setAllData] = useState([]);
  const { id, setId } = ChatState();
  const Nav = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://child.onrender.com/api/sciencefiction"
      );
      setAllData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleNew = () => {
    const newData = allData.filter((item) => item.Status === "New");
    setAllData(newData);
  };

  const handleProgress = () => {
    const newData = allData.filter((item) => item.Status === "In Progress");
    setAllData(newData);
  };

  const handleCompleted = () => {
    const newData = allData.filter((item) => item.Status === "Completed");
    setAllData(newData);
  };

  const handleClear = () => {
    setAllData(" ");
  };

  const handleStory = (value) => {
    setId(value.item._id);
    Nav("/design2");
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      ml={100}
      mt={50}
    >
      <Box>
        <Box>
          <Box display={"flex"} gap={3} m={70} ml={200}>
            <Button
              bg={"teal"}
              height={"30px"}
              borderRadius={4}
              onClick={handleNew}
            >
              New!
            </Button>
            <Button
              bg={"Yellow"}
              height={"30px"}
              borderRadius={4}
              onClick={handleProgress}
            >
              In Prgress
            </Button>
            <Button
              bg={"green"}
              height={"30px"}
              borderRadius={4}
              onClick={handleCompleted}
            >
              Completed
            </Button>
            <Button
              bg={"teal"}
              height={"30px"}
              borderRadius={4}
              onClick={handleClear}
            >
              Clear All
            </Button>
          </Box>
          {/* //content box */}

          <Box display={"flex"} flexWrap={"wrap"} gap={10}>
            {allData && allData.length > 0 ? (
              allData.map((item, index) => (
                <Box
                  key={index}
                  display={"flex"}
                  flexDir={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  width={"25%"}
                  height={200}
                  onClick={() => {
                    handleStory({ item });
                  }}
                  bgImage={
                    "linear-gradient(to right top, #c7c7c7, #cecece, #d6d6d6, #dddddd, #e5e5e5);"
                  }
                >
                  <Text fontSize={20} fontFamily={"cursive"} fontWeight={400}>
                    {item.Title}
                  </Text>
                  <Text>{item.Status}</Text>
                </Box>
              ))
            ) : (
              <Text>No data available</Text>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Design1;
