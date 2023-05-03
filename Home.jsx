import React from 'react'
import { useHistory, Link } from 'react-router-dom'

function Home(props) {
  const histoy = useHistory()
  const redirect = () => {
    histoy.push('/Profile')
  }

  return (
    <div>
      <img src="./testomony.png" alt="testomony" />
      <img src="./howitworks.png" alt="howitworks" />
      <div className="text-center pb-40">
        <button
          onClick={redirect}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded"
        >
          Get Started Now
        </button>
      </div>
    </div>
  )
}

export default Home
