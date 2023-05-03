import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Grid,
  GridItem,
  IconButton,
  Center,
  Card,
} from '@chakra-ui/react'
import { FaNetworkWired } from 'react-icons/fa'
import { SiHandshake } from 'react-icons/si'
import { MdOutlineLiveHelp } from 'react-icons/md'
import { GiSolarSystem } from 'react-icons/gi'
import { CgWebsite } from 'react-icons/cg'
import { FaUserFriends } from 'react-icons/fa'

function CreateSession({ selected, setSelected }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)
  const history = useHistory()

  return (
    <>
      <Button colorScheme="blue" onClick={onOpen}>
        Start a Practice Session
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader className=" mb-3">NEW PRACTICE INTERVIEW</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid templateColumns="repeat(2, 1fr)" className="px-4" gap={6}>
              <Card
                className="flex items-center p-4 pt-1 hover:bg-green-500 hover:text-white "
                style={{
                  background:
                    selected === 'Data Structures and Algorithms' && '#0f0',
                }}
                onClick={() => setSelected('Data Structures and Algorithms')}
              >
                <IconButton
                  variant="ghost"
                  icon={<FaNetworkWired fontSize="1.25rem" disabled />}
                  aria-label="Open Menu"
                />
                <p className="font-bold">Data Structures and Algorithms</p>
              </Card>

              <Card
                className="flex items-center p-4 pt-1 hover:bg-green-500 hover:text-white"
                style={{ background: selected === 'Behavioral' && '#0f0' }}
                onClick={() => setSelected('Behavioral')}
              >
                <IconButton
                  variant="ghost"
                  icon={<SiHandshake fontSize="1.15rem" />}
                  aria-label="Open menu"
                />
                <p className="font-bold">Behavioral</p>
              </Card>

              <Card
                className="flex items-center p-4 pt-1 hover:bg-green-500 hover:text-white"
                style={{ background: selected === 'Ask a question' && '#0f0' }}
                onClick={() => setSelected('Ask a question')}
              >
                <IconButton
                  variant="ghost"
                  icon={<MdOutlineLiveHelp fontSize="1.15rem" />}
                  aria-label="Open menu"
                />
                <p className="font-bold">
                  Ask a question, get a video response
                </p>
              </Card>

              <Card
                className="flex items-center p-4 pt-1 hover:bg-green-500 hover:text-white"
                style={{ background: selected === 'System Design' && '#0f0' }}
                onClick={() => setSelected('System Design')}
              >
                <IconButton
                  variant="ghost"
                  icon={<GiSolarSystem fontSize="1.15rem" />}
                  aria-label="Open menu"
                />
                <p className="font-bold">System Design</p>
              </Card>

              <Card
                className="flex items-center p-4 pt-1 hover:bg-green-500 hover:text-white"
                style={{ background: selected === 'Frontend' && '#0f0' }}
                onClick={() => setSelected('Frontend')}
              >
                <IconButton
                  variant="ghost"
                  icon={<CgWebsite fontSize="1.15rem" />}
                  aria-label="Open menu"
                />
                <p className="font-bold">Frontend</p>
              </Card>

              <Card
                className="flex items-center p-4 pt-1 hover:bg-green-500 hover:text-white"
                style={{ background: selected === 'Just Practice' && '#0f0' }}
                onClick={() => setSelected('Just Practice')}
              >
                <IconButton
                  variant="ghost"
                  icon={<FaUserFriends fontSize="1.15rem" />}
                  aria-label="Open menu"
                />
                <p className="font-bold">Practice with a Friend</p>
              </Card>
            </Grid>

            <p className="font-bold text-xl text-center pt-8">
              Practice with a Friend
            </p>
            <p className="p-6">
              Want to practice with a friend? Send out an invite, and jump
              straight into a collaborative session, using the Huddle video SDK
              and code execution
            </p>
          </ModalBody>
          <Center>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Never mind
              </Button>
              <Button colorScheme="green" onClick={() => history.push('/form')}>
                Continue
              </Button>
            </ModalFooter>
          </Center>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateSession
