// Components
import { useEffect } from 'react'
import { useSound } from 'use-sound';

const Mole = (props) => {

    useEffect(() => {
        let randomSeconds = Math.ceil(Math.random() * 3000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randomSeconds)
        return () => clearTimeout(timer)
    })

    const [playTouch] = useSound(
        '/moleUp.wav',
        { volume: 0.25 }
    );

    return (
        <div>
            <img
                style={{ 'width': '10vw' }}
                src={'/mole.png'}
                onClick={() => {
                    props.handleClick()
                    playTouch()
                }}
            />
        </div>
    )

}

export default Mole