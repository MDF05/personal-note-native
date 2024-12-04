import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

export default function Search({ setFilterNotes, listNotes, data }) {
  const [query, setQuery] = useState("");

  function onSearch(event) {
    event.preventDefault();
    setFilterNotes(listNotes.filter(n => n?.title?.toLocaleLowerCase().includes(query.toLocaleLowerCase())  || n?.body?.toLocaleLowerCase().includes(query.toLocaleLowerCase())));
    data.setQuery(query)
  }

  useEffect(() => {
    
    if(query.length == 0) {
      data.setQuery("")
      setFilterNotes([])
    }

  }, [query])


  

  return (
    <Box as={"form"} onSubmit={onSearch}>
      <Input placeholder="Cari catatan ..." width={"100%"} color={"white"} fontWeight={"bold"} _focusWithin={{ borderColor: "white" }}  value={query} onChange={(ev) => setQuery(ev.target.value)}  ></Input>
      <Button type={"submit"} hidden></Button>
    </Box>
  );
}
