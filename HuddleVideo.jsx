import React, { useRef, useEffect, useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
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

import Button from './Button'

export default function HuddleVideo() {
  // refs
  const videoRef = useRef(null)
  const HUDDLE01_PROJECTID = 'KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR'
  const HUDDLE01_ROOMID = 'hzs-kjtu-fjx'
  const { state, send } = useMeetingMachine()
  const [roomId, setRoomId] = useState('')
  const [projectId, setProjectId] = useState('')
  // Event Listner
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

  useEffect(() => {
    // its preferable to use env vars to store projectId
    initialize(HUDDLE01_PROJECTID)
    setRoomId(HUDDLE01_ROOMID)
  }, [])

  const allowAccess = () => {
    fetchVideoStream()
    fetchAudioStream()
  }

  return (
    <div className="grid grid-cols-2">
      <div>
        {/* <h2 className="text-2xl">Peers</h2>
        <div className="break-words">{JSON.stringify(peers)}</div>
        <h2 className="text-2xl">Consumers</h2>
        <div className="break-words">
          {JSON.stringify(state.context.consumers)}
        </div> */}

        {/* <h2 className="text-3xl text-blue-500 font-extrabold">Idle</h2>
        <input
          type="text"
          placeholder="Your Project Id"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mr-2"
        />
        <Button
          disabled={!state.matches('Idle')}
          onClick={() => {
            initialize(projectId)
          }}
        >
          INIT
        </Button> */}

        {/* <h2 className="text-3xl text-red-500 font-extrabold">Initialized</h2>
        <input
          type="text"
          placeholder="Your Room Id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mr-2"
        />


        <br />
        <br /> */}
        <h2 className="text-3xl text-yellow-500 font-extrabold">Lobby</h2>
        <div className="flex gap-4 flex-wrap">
          <Button
            disabled={!joinLobby.isCallable}
            onClick={() => {
              joinLobby(HUDDLE01_ROOMID)
            }}
          >
            Get Started to join
          </Button>
          <Button
            disabled={
              !fetchVideoStream.isCallable && !fetchAudioStream.isCallable
            }
            onClick={allowAccess}
          >
            Allow Mic & Camera
          </Button>

          {/* <Button
            disabled={!fetchAudioStream.isCallable}
            onClick={fetchAudioStream}
          >
            FETCH_AUDIO_STREAM
          </Button> */}

          <Button disabled={!joinRoom.isCallable} onClick={joinRoom}>
            Join Room
          </Button>

          <Button
            disabled={!state.matches('Initialized.JoinedLobby')}
            onClick={() => send('LEAVE_LOBBY')}
          >
            Leave
          </Button>

          {/* <Button
            disabled={!stopVideoStream.isCallable}
            onClick={stopVideoStream}
          >
            STOP_VIDEO_STREAM
          </Button>
          <Button
            disabled={!stopAudioStream.isCallable}
            onClick={stopAudioStream}
          >
            STOP_AUDIO_STREAM
          </Button> */}
        </div>
        <br />
        <h2 className="text-3xl text-green-600 font-extrabold">Room</h2>
        <div className="flex gap-4 flex-wrap">
          {/* !stopProducingAudio.isCallable */}

          <Button
            disabled={!produceAudio.isCallable}
            onClick={() => produceAudio(micStream)}
          >
            Unmute
          </Button>

          <Button
            disabled={!produceVideo.isCallable}
            onClick={() => produceVideo(camStream)}
          >
            Camera
          </Button>

          <Button
            disabled={!stopProducingAudio.isCallable}
            onClick={() => stopProducingAudio()}
          >
            Mute
          </Button>

          <Button
            disabled={!stopProducingVideo.isCallable}
            onClick={() => stopProducingVideo()}
          >
            Off Camera
          </Button>

          <Button disabled={!leaveRoom.isCallable} onClick={leaveRoom}>
            Leave Room
          </Button>
        </div>

        {/* Uncomment to see the Xstate Inspector */}
        {/* <Inspect /> */}
      </div>
      <div>
        <div className="grid grid-cols-4">
          <video ref={videoRef} autoPlay muted width="300px"></video>
          {Object.values(peers)
            .filter((peer) => peer.cam)
            .map((peer) => (
              <Video
                key={peer.peerId}
                peerId={peer.peerId}
                track={peer.cam}
                debug
                width="300px"
              />
            ))}
          {Object.values(peers)
            .filter((peer) => peer.mic)
            .map((peer) => (
              <Audio key={peer.peerId} peerId={peer.peerId} track={peer.mic} />
            ))}
        </div>
      </div>
    </div>
  )
}
