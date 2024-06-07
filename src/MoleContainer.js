// Components
import { useState } from 'react'
import useSound, { useAudio } from 'use-sound'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
  let [theMole, setTheMole] = useState(false)

  const handleClick = (z) => {
    props.setScore(props.score + 1)
    setTheMole(false)
  }

  const [playUp] = useSound(
    '/moleUp.wav',
    { volume: 0.25 }
  )

  let displayMole = theMole
    ? <Mole
      setScore={props.setScore}
      toggle={() => {
        setTheMole()
        playUp()
      }}
      handleClick={handleClick}
    />
    : <EmptySlot toggle={setTheMole} />

  return (
    <div style={{ 'display': 'inline-block', 'width': '30vw', 'margin': 'auto' }}>
      {displayMole}
    </div>
  )
}

export default MoleContainer