import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { MusicContext } from '../context'
import { BackwardIcon, ForwardIcon, IconPlay, IconPause, MuteIcon, NoMuteIcon } from './Icons'
const Footer = () => {
    const { playM, controlador, audioRef } = useContext(MusicContext)
    const [volume, setVolume] = useState(30);
    const volumeAudio = useRef(null);

    const volumeChange = () => {
        audioRef.current.volume = volumeAudio.current.value / 100;
        setVolume(volumeAudio.current.value);
    };
    return (
        <>
            {playM && (
                <article className="col-span-2 bg-red-third w-full h-[100px] fixed bottom-0 md:bottom-0 flex text-white">
                    <div className="flex basis-[50%] md:basis-[25%]">
                        <img src={playM.album.cover_big} />
                        <div className="flex justify-center flex-col ml-4">
                            <p className="font-bold text-[9px] md:text-sm">{playM.album.title}</p>
                            <p className="text-[7px] md:text-[12px]"><span>{playM.artist.name}</span> - <span>{playM.album.title}</span></p>
                        </div>
                    </div>
                    <div className='flex basis-[30%] md:basis-[50%] justify-center'>
                        <div className='flex flex-row-reverse items-center basis-[33.33%]'><BackwardIcon /></div>
                        {controlador == false && (<div className='flex basis-[33.33%] items-center justify-center'><IconPlay /></div>)}
                        {controlador == true && (<div className='flex basis-[33.33%] items-center justify-center'><IconPause /></div>)}
                        <div className='flex items-center basis-[33.33%]'><ForwardIcon /></div>
                    </div>
                    {
                        audioRef.current && (
                            <div className='basis-[20%] md:basis-[25%] flex items-center'>
                                <input
                                    className='class="w-auto h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"'
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={volume}
                                    ref={volumeAudio}
                                    onChange={volumeChange}
                                />
                                {volume == 0 && <MuteIcon />}
                                {volume > 0 && <NoMuteIcon />}
                            </div>
                        )
                    }

                </article>
            )}
        </>
    )
}

export default Footer