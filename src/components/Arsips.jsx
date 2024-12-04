import React from "react";
import { HStack, Text, VStack, Box } from "@chakra-ui/react";
import { showFormattedDate } from "../utils";
import ButtonDeleteNote from "./Button-Delete-Note";
import ButtonSweepNote from "./Button-Sweep-Note";

export default function Arsips({ listNotes, setListNotes, filterNotes, query }) {

  if ((query.length !== 0 ? filterNotes : listNotes).filter(n => n.archived == true).length == 0)
    return (
      <Box position={"absolute"} width={"100%"} textAlign={"center"} color={"fontPasif"}>
        tidak ada catatan
      </Box>
    );

  return (
    <>
      {(query.length !== 0  ? filterNotes : listNotes).filter(n => n.archived == true).map((arsip, index) => {
        return (
          <VStack border={"1px solid"} borderColor={"fontWhite"} textAlign={"left"} w={"100%"} gap={"0px"} p={"0px"} rounded={"5px"} key={index}>
            <VStack w={"100%"} gap={"0px"} p={"5px"}>
              <Text fontWeight={"bold"} w={"100%"} m={"0"} overflow={"hidden"} height={"20px"} textOverflow={"ellipsis"} whiteSpace="nowrap">
                {arsip.tittle}
              </Text>
              <Text color={"fontPasif"} fontSize={"small"} w={"100%"} m={"0"} height={"20px"}>
                {showFormattedDate(arsip.createdAt)}
              </Text>
            </VStack>
            <VStack w={"100%"} p={"5px"}>
              <Text
                w={"100%"}
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 8, // Batasi ke 3 baris
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "normal",
                }}
                minH={"190px"}
              >
                {arsip.body}
              </Text>
            </VStack>
            <HStack borderTop={"1px solid"} borderColor={"fontWhite"} width={"100%"} gap={"0"}>
              <ButtonDeleteNote note={arsip} setListNotes={setListNotes}></ButtonDeleteNote>
              <ButtonSweepNote note={arsip} setListNotes={setListNotes}>pindahkan</ButtonSweepNote>
            </HStack>
          </VStack>
        );
      })}
    </>
  );
}
