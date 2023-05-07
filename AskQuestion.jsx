import React, { useEffect, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  Box,
  Center,
  Stack,
  Checkbox,
  Button,
  CheckboxGroup,
  Card,
} from '@chakra-ui/react'
import { Polybase } from '@polybase/client'

const db = new Polybase({
  defaultNamespace:
    '0x1535283e7a32e43a2f96cf6f758afd6016ae7dc801f19b41b94e02b99410426f1f8c072e11a5af7aac9efe8d15da6042b37c0776c894dda55cba3de021303723',
})

function AskQuestion(props) {
  const initializedPolybase = async () => {
    const createQuestion = await db.applySchema(
      `@public
      collection Question {
        question_id: string;
        description: string;
        price?: number;
        author: string;

        constructor (
          question_id: string;
          description: string;
          price?: number;
          author: string;
          ) {
          this.question_id = question_id;
          this.description = description;
          this.price = price;
          this.author = author;
          this.author = author;
        }
      }
    `,
      '0x1535283e7a32e43a2f96cf6f758afd6016ae7dc801f19b41b94e02b99410426f1f8c072e11a5af7aac9efe8d15da6042b37c0776c894dda55cba3de021303723',
    ) // your-namespace is optional if you have defined a default namespace
    console.log('🚀 createQuestion:', createQuestion)
  }

  useEffect(() => {
    initializedPolybase()
    console.log('🚀 ~ file: Apartments.tsx:8 ~ db:', db)
    console.log('initializedPolybase')
  }, [])

  const saveData = (event) => {
    event.preventDefault()
    console.log('event', event)
    const formData = new FormData(event.target)
    console.log(formData)
    const formProps = Object.fromEntries(formData)
    console.log('formProps:', formProps)
    const topics = formData.getAll('topics')
    console.log('🚀All', topics)
    //console.log('formProps:', formProps)
  }
  return (
    <Box className=" p-20 pt-12">
      <h1 className="text-center pb-8 font-semi-bold">
        Ask a question, get a live video response
      </h1>
      <form className="text-center" onSubmit={saveData} method="POST">
        <FormControl>
          <FormLabel>Subject</FormLabel>
          <Input
            placeholder="Converting bytecode to its original state"
            _placeholder={{ opacity: 1, color: 'gray.500' }}
            type="text"
            name="subject"
          />
        </FormControl>

        <FormControl className="pt-6">
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            name="level"
            placeholder=""
            _placeholder={{ opacity: 1, color: 'gray.500' }}
          />
        </FormControl>

        <FormControl className="pt-6">
          <FormLabel>Payment suggested </FormLabel>
          <Input
            type="text"
            name="level"
            placeholder="Enter amount you wish to offer e.i: 5 USDC"
            _placeholder={{ opacity: 1, color: 'gray.500' }}
          />
        </FormControl>

        <Center className="pt-16">
          <Button variant="solid" colorScheme="blue" w="50%" type="submit">
            Create
          </Button>
        </Center>
      </form>
    </Box>
  )
}

export default AskQuestion
