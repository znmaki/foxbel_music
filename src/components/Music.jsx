import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { MusicContext } from '../context';
import { ElipsisVIcon, IconPlay } from './Icons';


const Music = ({ song }) => {
    const { audioRef, setControlador } = useContext(MusicContext)

    const params = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/search/${params.music}/${song.id}`)
        audioRef.current.setAttribute('autoPlay', 'true');
        setControlador(true)
    }
    return (
        <div className='max-w-[160px]'>
            {song.picture_big ? (
                <img src={song.picture_big} width={160} height={160} alt={song.title ? song.title : song.name} />
            ) : song.cover_big ? (
                <img src={song.cover_big} width={160} height={160} alt={song.title ? song.title : song.name} />
            ) : (
                <div className='relative'>
                    <div onClick={handleClick} className='bg-transpa h-full w-full absolute flex justify-center items-center'><IconPlay /></div>
                    <div className='absolute flex flex-row-reverse pt-2 pr-2'><ElipsisVIcon /></div>
                    <img src={song.album.cover_big} width={160} height={160} alt={song.title ? song.title : song.name} />
                </div>
            )}

            <p className='text-[14px] font-bold'>{song.title}</p>
            <p className='text-[14px]'>{song.description}</p>
            {song.name && (
                <p>{song.name}</p>
            )}
            {song.artist && (
                <p className='text-[12px] text-gray-custze'>{song.artist.name}</p>
            )}
        </div>
    )
}

export default Music