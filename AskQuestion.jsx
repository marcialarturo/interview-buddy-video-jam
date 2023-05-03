import React from 'react'
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

function AskQuestion(props) {
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
