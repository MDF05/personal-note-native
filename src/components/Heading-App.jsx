import { Flex, Text } from "@chakra-ui/react";
import React from "react"

export default function HeadingNotes({ text }){
  return (
    <Flex width={"100%"} py={"30px"}>
      <Text textAlign={"left"} color={"fontWhite"}>
        {text}
      </Text>
    </Flex>
  );
}
