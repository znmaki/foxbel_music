import { createContext, useRef, useState } from "react";

const MusicContext = createContext()

const MusicProvider = ({ children }) => {
    const [musicId, setMusicId] = useState({});
    const [playMusic, setPlayMusic] = useState({});
    const [playM, setPlayM] = useState('');
    const [musicParam, setMusicParam] = useState('')
    const audioRef = useRef(null)

    const [controlador, setControlador] = useState(false)

    const playMusicState = (img, title, artist, music) => {
        setPlayMusic({
            img, title, artist, music
        })
    }
    const musicParamState = (param) => {
        setMusicParam(param)
    }
    const playState = (musicSelect) => {
        setPlayM(musicSelect)
    }

    return (
        <MusicContext.Provider
            value={{
                playMusicState,
                musicParam,
                musicParamState,
                playMusic,
                playState,
                playM,

                audioRef,
                musicId,
                setMusicId,
                setControlador,
                controlador
            }}
        >
            {children}
        </MusicContext.Provider>
    )
}

export {
    MusicProvider
}

export default MusicContext