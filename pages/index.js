import style from "../styles/Index.module.css"
import {useEffect, useState} from "react"

let audio

export default function Index() {
    const [count, setCount] = useState(0)

    function play() {
        setCount(_count => _count + 1)
        audio.play()
    }

    useEffect(() => {
        audio = new Audio("./wooden.mp3")

        audio.load()

        const listener = (e) => {
            if(e.code !== "Space")
                return

            play()
        }

        document.addEventListener("keydown", listener)

        return () => {
            document.removeEventListener("keydown", listener)
        }
    }, [])

    return (
        <div className={style.container}>
            <h1>目前運氣 {count}</h1>
            <img src="./wooden.png" className={style.image} onClick={() => play()}/>
        </div>
    )
}
