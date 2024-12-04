  import { Button, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";
  import { Field } from "./ui/field";
  import React, {useEffect, useState} from "react"


  export default function FormAddNotes({setListNotes}){
    const [tittle, setTittle] = useState("")
    const [body, setBody] = useState("")




    function handleSubmit(event) {
      event.preventDefault()

      if(tittle !== "" && body !== "" && tittle.length <= 50) {
        const newNote = {
          id : new Date().getTime() + Math.random().toString().replace(".", ""),
          tittle,
          body,
          createdAt : new Date().toISOString(),
          archived : false,
        }
    
        setListNotes((prev) => (
        [ ...prev, newNote]
        ));
        
              setBody("")
              setTittle("")
      }
    }

    return (
      <VStack as={"form"}width={"100%"} color={"fontWhite"} onSubmit={handleSubmit}>
        <Field >
          <Text textAlign={"end"} width={"100%"} color={"silver"}>
            Sisa karakter : {50 - ( tittle?.length || 0) }
          </Text>
          <Input
            placeholder="ini adalah tittle ...."
            onChange={event => setTittle(event.target.value)}
            borderColor={(tittle?.length <= 50 && "white" ) ||  "delete.active" }
            _focusWithin={(tittle?.length <= 50 && { borderColor: "green" }) || { borderColor: "delete.active" }}
            max={50} min={5} required
            value={tittle}
          ></Input>
        </Field>
        <Field >
          <Textarea placeholder="tuliskan catatanmu disini ...."  borderColor={ "white"  }
            _focusWithin={  {borderColor: "green" }} resize={"none"} minH={"150px"}
          onChange={event => setBody(event.target.value)} value={body} required
          ></Textarea>
        </Field>
        <HStack width={"100%"}>
          <Button type="submit" width={"100%"} bg={"backgroundBase"} border={"1px solid"} borderColor={"fontWhite"}>
            submit
          </Button>
        </HStack>
      </VStack>
    );
  }
