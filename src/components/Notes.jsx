import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { showFormattedDate } from "../utils";
import ButtonDeleteNote from "./Button-Delete-Note";
import ButtonSweepNote from "./Button-Sweep-Note";

export default function Notes({listNotes, setListNotes, filterNotes, query}) {

  console.log(query,filterNotes)

  if ((query.length !== 0 ? filterNotes : listNotes).filter(n => n.archived == false).length == 0)
    return (
      <Box position={"absolute"} width={"100%"} textAlign={"center"} color={"fontPasif"}>
        tidak ada catatan
      </Box>
    );

  return (
    <>
      {(query.length !== 0 ? filterNotes : listNotes).filter(n => n.archived == false).map((note, index) => {
        return (
          <VStack border={"1px solid"} borderColor={"fontWhite"} textAlign={"left"} w={"100%"} gap={"0px"} p={"0px"} rounded={"5px"} key={index}>
            <VStack w={"100%"} gap={"0px"} p={"5px"}>
              <Text fontWeight={"bold"} w={"100%"} m={"0"} overflow={"hidden"} height={"20px"} textOverflow={"ellipsis"} whiteSpace="nowrap">
                {note.tittle}
              </Text>
              <Text color={"fontPasif"} fontSize={"small"} w={"100%"} m={"0"} height={"20px"}>
                {showFormattedDate(note.createdAt)}
              </Text>
            </VStack>
            <VStack w={"100%"} p={"5px"}>
              <Text
                w={"100%"}
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 8, 
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
                minH={"190px"}
              >
                {note.body}
              </Text>
            </VStack>
            <HStack borderTop={"1px solid"} borderColor={"fontWhite"} width={"100%"} gap={"0"}>
              <ButtonDeleteNote note={note}  setListNotes={setListNotes}></ButtonDeleteNote>
              <ButtonSweepNote setListNotes={setListNotes} note={note} >arsip</ButtonSweepNote>
            </HStack>
          </VStack>
        );
      })}
    </>
  );
}
