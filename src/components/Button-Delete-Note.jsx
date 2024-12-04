import React from 'react';
import { Button } from "@chakra-ui/react";

export default function ButtonDeleteNote({ note, setListNotes }) {

  function onDeleteNote() {
   const isConfirm = confirm("apakah kamu yakin menghapus catatan ini") 
   if (isConfirm) {
     setListNotes(prev => prev.filter(item => item.id!== note.id))
   }
  }

  return (
    <Button w={"50%"} border={"1px solid"} borderColor={"fontWhite"} color={"delete.active"} onClick={onDeleteNote}>
      Delete
    </Button>
  );
}
