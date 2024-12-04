import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ChakraProvider, HStack, VStack } from "@chakra-ui/react";
import HeadingNotes from "./Heading-App";
import FormAddNotes from "./Form-Add-Note";
import { system } from "../config/chakra-theme";
import ListNotes from "./List-Notes";
import Notes from "./Notes";
import Arsips from "./Arsips";
import { getInitialData } from "../utils";

export function App() {
  const [listNotes, setListNotes] = useState([]);
  const [filterNotes, setFilterNotes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
      setListNotes(getInitialData)
  }, [])




  return (
    <ChakraProvider value={system}>
      <HStack display={"flex"} flexDirection={"column"} width={"100%"} bg={"backgroundBase"} height={"100vh"} overflowY={"auto"} alignItems={"center"}>
        <Navbar setFilterNotes={setFilterNotes} listNotes={listNotes} data={{setQuery,query}}></Navbar>
        {(query ==  ""  && (
              <VStack width={"40%"}>
                <HeadingNotes text="Buat Catatan" />
                <FormAddNotes setListNotes={setListNotes}></FormAddNotes>
            </VStack>
        ))}
        <VStack width={"80%"}>
          <HeadingNotes text="Catatan Aktif" />
          <ListNotes>
              <Notes listNotes={listNotes} setListNotes={setListNotes} filterNotes={filterNotes} query={query} />
          </ListNotes>
        </VStack>
        <VStack width={"80%"}>
          <HeadingNotes text="Arsip" />
          <ListNotes>
              <Arsips setListNotes={setListNotes}  listNotes={listNotes} filterNotes={filterNotes} query={query}/>
          </ListNotes>
        </VStack>
      </HStack>
    </ChakraProvider>
  );
}
