import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Music from '../components/Music'
import { MusicContext } from '../context'
import { musicService } from "@services";
import InfoMusic from '../components/InfoMusic'

export default function MusicId() {
    const { setMusicId, audioRef, playState, playM } = useContext(MusicContext)

    const params = useParams();
    const [musicList, setMusicList] = useState([]);
    const [loading, setLoading] = useState(true);

    const getMusic = async () => {
        await musicService("music", params.id)
            .then(rs => {
                setMusicId(rs.data);
                playState(rs.data);
                setLoading(false)
            })
    }
    const getMusicList = async () => {
        await musicService("search", params.music)
            .then(rs => {
                setMusicList(rs.data.data);
                setLoading(false)
            })
    }
    useEffect(() => {
        getMusic();
        getMusicList()
    }, [params.id])

    return (
        <>
            {loading && (<div>Cargando...</div>)}
            {!loading &&
                (
                    <div>
                        <InfoMusic/>
                        <h2 className="font-bold text-red-primary mb-10">Resultados</h2>
                        <div className='grid grid-cols-3 gap-x-7 md:gap-x-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-7 pb-[10rem]'>
                            {musicList.map(song =>
                                <Music
                                    key={song.id}
                                    song={song}
                                />
                            )}
                            <audio src={playM.preview} ref={audioRef} autoPlay></audio>
                        </div>
                    </div>
                )
            }
        </>

    )
}
