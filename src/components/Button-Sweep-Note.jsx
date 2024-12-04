import { Button } from '@chakra-ui/react';
import React from 'react';

export default function ButtonSweepNote({ note, setListNotes, children }){
  function onArsipNote() {
    const confirmArsip = confirm("apakah kamu yakin mengarsip catatan ini");

    setListNotes((prev) => prev.map(n => {
        if (n.id === note.id) {
          return {...n, archived: !n.archived };
        }
        return n;
      }));
  }

  return (
    <Button w={"50%"} border={"1px solid"} borderColor={"fontWhite"} color={"arsip.active"} onClick={onArsipNote}>
      {children}
    </Button>
  );
}
