import React, { useState } from 'react'
import lighthouse from '@lighthouse-web3/sdk'
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
import AskQuestion from './AskQuestion'

function SessionForm({ selected, setSelected }) {
  const LIGHTHOUSE_API_KEY = 'f8984144.f125c5eb4671439cb2b135e3428b76e3'
  // const LIGHTHOUSE_API_KEY = 'ab7153c3-0c78-4cb1-b6ec-92edb4736b9a'
  console.log('HERE selected:', selected)
  // function  that we call onSubmit
  // in this function will parse it and then call the DB to be save

  const progressCallback = (progressData) => {
    let percentageDone =
      100 - (progressData?.total / progressData?.uploaded)?.toFixed(2)
    console.log(percentageDone)
  }

  const uploadVideoFile = async (e) => {
    // Push file to lighthouse node
    // Both file and folder are supported by upload function
    const output = await lighthouse.upload(
      e,
      LIGHTHOUSE_API_KEY,
      progressCallback,
    )
    console.log('File Status:', output)
    /*
      output:
        data: {
          Name: "filename.txt",
          Size: 88000,
          Hash: "QmWNmn2gr4ZihNPqaC5oTeePsHvFtkWNpjY3cD6Fd5am1w"
        }
      Note: Hash in response is CID.
    */

    console.log(
      'Visit at https://gateway.lighthouse.storage/ipfs/' + output.data.Hash,
    )
  }

  const saveData = (event) => {
    /*
    - grab user input
    - format data => File
    - use APIKEY to post/save into LH
    - LH returns an uri
    - to test we can use a LH gateway to see the data or we can fetch from app

    */
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
    <Center className="pb-20">
      <input
        onChange={(e) => uploadVideoFile(e)}
        type="file"
        accept=".txt, .pdf"
      />

      <Card style={{ width: '600px' }}>
        {selected == 'Ask a question' && <AskQuestion />}
        {selected != 'Ask a question' && (
          <Box className=" p-20 pt-12">
            <h1 className="text-center pb-8 font-semi-bold">Book Session</h1>
            <form className="text-center" onSubmit={saveData} method="POST">
              <FormControl>
                <FormLabel>Subject</FormLabel>
                <Input
                  placeholder="I am looking to practice DS&A"
                  _placeholder={{ opacity: 1, color: 'gray.500' }}
                  type="text"
                  name="subject"
                />
              </FormControl>

              <FormControl className="pt-6">
                <FormLabel>Select your programming languages</FormLabel>
                <CheckboxGroup
                  colorScheme="green"
                  defaultValue={['naruto', 'kakashi']}
                >
                  <Stack spacing={5}>
                    <Checkbox name="programmingLanguages">Python</Checkbox>
                    <Checkbox>Javascript</Checkbox>
                    <Checkbox name="programmingLanguages">Java</Checkbox>
                    <Checkbox name="programmingLanguages">Rust</Checkbox>
                    <Checkbox name="programmingLanguages">Solidity</Checkbox>
                    <Checkbox name="programmingLanguages">Goland</Checkbox>
                    <Checkbox name="programmingLanguages">Other</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </FormControl>

              <FormControl className="pt-6">
                <FormLabel>Enter your programming level</FormLabel>
                <Input
                  type="text"
                  name="level"
                  placeholder="Beginner, Intermedium, Advance"
                  _placeholder={{ opacity: 1, color: 'gray.500' }}
                />
              </FormControl>

              <FormControl className="pt-6">
                <FormLabel>
                  Enter your availability in this format `Mond-Fri 5PM-7PM EST`
                </FormLabel>
                <Input
                  type="text"
                  name="availability"
                  placeholder="Mond-Fri 5PM-7PM EST"
                  _placeholder={{ opacity: 1, color: 'gray.500' }}
                />
              </FormControl>

              <FormControl className="pt-6">
                <FormLabel>Topics</FormLabel>
                <CheckboxGroup
                  colorScheme="green"
                  defaultValue={['naruto', 'kakashi']}
                >
                  <Stack spacing={5}>
                    <Checkbox value="Arrays" type="checkbox" name="topics">
                      Arrays
                    </Checkbox>
                    <Checkbox value="Algorithms" type="checkbox" name="topics">
                      Algorithms
                    </Checkbox>
                    <Checkbox value="Sorting" type="checkbox" name="topics">
                      Sorting
                    </Checkbox>
                    <Checkbox value="Math" type="checkbox" name="topics">
                      Math
                    </Checkbox>
                    <Checkbox
                      value="Binary Trees"
                      type="checkbox"
                      name="topics"
                    >
                      Binary Trees
                    </Checkbox>
                    <Checkbox value="Strings" type="checkbox" name="topics">
                      Strings
                    </Checkbox>
                    <Checkbox value="Other" type="checkbox" name="topics">
                      Other
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </FormControl>
              <Center className="pt-16">
                <Button
                  variant="solid"
                  colorScheme="blue"
                  w="50%"
                  type="submit"
                >
                  Create
                </Button>
              </Center>
            </form>
          </Box>
        )}
      </Card>
    </Center>
  )
}

export default SessionForm
