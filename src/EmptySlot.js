// Components
import { useEffect } from "react"

const EmptySlot = (props) => {

  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 5000)
    let timer = setTimeout(() => {
      props.toggle(true)
    }, randomSeconds)
    return () => clearTimeout(timer)
  })

  return (
    <div>
      <img style={{ 'width': '10vw' }} src='/molehill.png' />
    </div>
  )
}

export default EmptySlot