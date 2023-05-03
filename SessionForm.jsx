import React, { useState, useEffect, useContext } from 'react'
import lighthouse from '@lighthouse-web3/sdk'
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Center,
  Stack,
  Checkbox,
  Button,
  CheckboxGroup,
  Card,
  Spinner,
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import AskQuestion from './AskQuestion'
import { WalletContext } from '../App'
import axios from 'axios'

function SessionForm({ selected }) {
  const LIGHTHOUSE_API_KEY = import.meta.env.VITE_LIGHTHOUSE_API_KEY
  const HUDDLE_API_KEY = import.meta.env.VITE_HUDDLE_API_KEY
  const { wallet, contract } = useContext(WalletContext)
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    const getData = async () => {
      const h = 'QmVBDJRP9LqWXeSpsXzEz7jGwP9HNFvYxnjJ6cqBCJXWv3'
      const res = await fetch(`https://gateway.lighthouse.storage/ipfs/${h}`)

      const jsonData = await res.json()
      console.log('🚀 ~ jsonData:', jsonData)
    }
    getData()

    // TO FETCH
    //  on useEffect call the contract getAllSessions(func that returns the arr with all hashes)
    //  tempArra = []
    // for() {
    //   const cur = fetch()
    //  tempArra.cur
    // outside of the for, set the state   setSessions(tempArra)
    //  use tempArra to map & render the sessions
  }, [])

  const saveData = async (event) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)
    const time = formData.get('availability')
    console.log('time:', time)

    const dataToSave = {
      ...Object.fromEntries(
        Array.from(formData.keys()).map((key) => [
          key,
          formData.getAll(key).length > 1
            ? formData.getAll(key)
            : formData.get(key),
        ]),
      ),
      wallet: wallet,
      createdDate: new Date(),
      sessionType: selected,
    }
    // console.log('dataToSave', dataToSave)

    const data = await lighthouse.uploadText(
      JSON.stringify(dataToSave),
      LIGHTHOUSE_API_KEY,
    )

    const cid = data?.data?.Hash
    console.log('cid', cid)

    // call the contract
    const getRoomIdHuddle = await axios.post(
      'https://iriko.testing.huddle01.com/api/v1/create-room',
      {
        title: 'Huddle01-Test',
        hostWallets: ['0x29f54719E88332e70550cf8737293436E9d7b10b'],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': HUDDLE_API_KEY,
        },
      },
    )
    // console.log('🚀getRoomIdHuddle:', getRoomIdHuddle)
    const roomId = getRoomIdHuddle?.data?.data?.roomId
    console.log('roomId:', roomId)

    if (contract) {
      const tx = await contract.createSession(cid, roomId, time, {
        value: '500000000000000000',
      })
      const res = await tx.wait()
      console.log('CONTRACt res:', res)
      if (res) {
        setLoading(false)
        history.push('/Sessions')
      }
    }
  }
  return (
    <Center className="pb-20">
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
                    <Checkbox
                      value="Python"
                      type="checkbox"
                      name="programmingLanguages"
                    >
                      Python
                    </Checkbox>
                    <Checkbox
                      value="Javascript"
                      type="checkbox"
                      name="programmingLanguages"
                    >
                      Javascript
                    </Checkbox>

                    <Checkbox
                      value="Java"
                      type="checkbox"
                      name="programmingLanguages"
                    >
                      Java
                    </Checkbox>
                    <Checkbox
                      value="Rust"
                      type="checkbox"
                      name="programmingLanguages"
                    >
                      Rust
                    </Checkbox>
                    <Checkbox
                      value="Solidity"
                      type="checkbox"
                      name="programmingLanguages"
                    >
                      Solidity
                    </Checkbox>
                    <Checkbox
                      value="Goland"
                      type="checkbox"
                      name="programmingLanguages"
                    >
                      Goland
                    </Checkbox>
                    <Checkbox
                      value="Other"
                      type="checkbox"
                      name="programmingLanguages"
                    >
                      Other
                    </Checkbox>
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
                  Continue
                </Button>
              </Center>

              <Center>
                {loading && (
                  <div className="pt-6">
                    <Spinner
                      color="red.500"
                      size="xl"
                      thickness="4px"
                      speed="0.65s"
                      emptyColor="gray.200"
                      label="loading"
                    />
                    <p>Creating your session.</p>
                  </div>
                )}
              </Center>
            </form>
          </Box>
        )}
      </Card>
    </Center>
  )
}

export default SessionForm
