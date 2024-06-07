// Components
import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
  let [theMole, setTheMole] = useState(false)

  const handleClick = (z) => {
    props.setScore(props.score + 1)
    setTheMole(false)
  }

  let displayMole = theMole
    ? <Mole setScore={props.setScore} toggle={setTheMole} handleClick={handleClick} />
    : <EmptySlot toggle={setTheMole} />

  return (
    <div style={{ 'display': 'inline-block', 'width': '30vw', 'margin': 'auto' }}>
      {displayMole}
    </div>
  )
}

export default MoleContainer