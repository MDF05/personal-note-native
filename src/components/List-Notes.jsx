import React from "react"
import { Grid } from "@chakra-ui/react";



export default function ListNotes(props) {
  const { children } = props;

  return (
    <Grid pb={"50px"} gridTemplateColumns={"repeat(3, 30%)"} width={"100%"} color={"white"} gap={"10px"} position={"relative"}>
      {children}
    </Grid>
  );
}
