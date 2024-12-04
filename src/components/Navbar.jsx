import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react"
import Search from "./Search";

export default function Navbar({setFilterNotes, listNotes,data}) {
  return (
    <HStack width={"100%"} borderBottom={"1px solid"} padding={"10px"} bg={"backgroundBase"} color={"white"} justifyContent={"space-between"}>
      <Box>
        <Text fontWeight={"bold"} fontSize={"3xl"}>
          Notes
        </Text>
      </Box>
      <Box width={"30%"}>
        <Search setFilterNotes={setFilterNotes} listNotes={listNotes} data={data}></Search>
      </Box>
    </HStack>
  );
}
