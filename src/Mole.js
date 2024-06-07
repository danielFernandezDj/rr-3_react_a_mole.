// Components
import { useEffect } from 'react'

const Mole = (props) => {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '10vw' }} src={'/mole.png'} onClick={props.handleClick} />
        </div>
    )
}

export default Mole