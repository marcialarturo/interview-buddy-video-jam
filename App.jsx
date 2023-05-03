import React, { useRef, useState, useContext, createContext } from 'react'
import { ChakraProvider, SimpleGrid, Container } from '@chakra-ui/react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEventListener, useHuddle01 } from '@huddle01/react'
import { Audio, Video } from '@huddle01/react/components'
/* Uncomment to see the Xstate Inspector */
// import { Inspect } from '@huddle01/react/components';

import {
  useAudio,
  useLobby,
  useMeetingMachine,
  usePeers,
  useRoom,
  useVideo,
} from '@huddle01/react/hooks'
import Button from './components/Button'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import OpenSessions from './components/OpenSessions'
import Whiteboard from './components/Whiteboard'
import Sandbox from './components/sandbox/Sandbox'
import Home from './components/Home'
import SessionForm from './components/SessionForm'
import Community from './components/Community'
import Footer from './components/Footer'

export const WalletContext = createContext({})

export default function App() {
  const [wallet, setWallet] = useState('')
  const [contract, setContract] = useState('')

  // refs
  const videoRef = useRef(null)

  const { state, send } = useMeetingMachine()
  const [roomId, setRoomId] = useState('')
  const [projectId, setProjectId] = useState('')
  const [selected, setSelected] = useState('')

  // Event Listener
  useEventListener('lobby:cam-on', () => {
    if (state.context.camStream && videoRef.current)
      videoRef.current.srcObject = state.context.camStream
  })

  const { initialize } = useHuddle01()
  const { joinLobby } = useLobby()
  const {
    fetchAudioStream,
    produceAudio,
    stopAudioStream,
    stopProducingAudio,
    stream: micStream,
  } = useAudio()
  const {
    fetchVideoStream,
    produceVideo,
    stopVideoStream,
    stopProducingVideo,
    stream: camStream,
  } = useVideo()
  const { joinRoom, leaveRoom } = useRoom()
  const { peers } = usePeers()

  return (
    <WalletContext.Provider
      value={{ wallet, setWallet, contract, setContract }}
    >
      <ChakraProvider>
        <Router>
          <Navigation />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile selected={selected} setSelected={setSelected} />
          </Route>
          <Route exact path="/sessions">
            <OpenSessions />
          </Route>
          <Route exact path="/Community">
            <Community />
          </Route>
          <Route exact path="/whiteboard">
            <Whiteboard />
          </Route>
          <Route path="/sandbox/:roomId">
            <Sandbox />
          </Route>
          <Route exact path="/form">
            <SessionForm selected={selected} setSelected={setSelected} />
          </Route>
          <Footer />
        </Router>
      </ChakraProvider>
    </WalletContext.Provider>
  )
}
