import React from 'react'
import { useContext } from 'react'
import { MusicContext } from '../context'

const InfoMusic = () => {
    const { playM, audioRef, setControlador, controlador } = useContext(MusicContext)

    const handleClickPlay = () => {
        audioRef.current.play();
        setControlador(true)
    }

    const handleClickPause = () => {
        audioRef.current.pause();
        setControlador(false)
    }

    return (
        <div className="flex bg-slate-400 h-[250px] my-10">
            {playM && (
                <>
                    <div className='hidden md:block md:min-w-[250px]'>
                        <img src={playM.artist.picture_big} width={250} height={250} alt={playM.artist.name} />
                    </div>
                    <div className='relative inline-block basis-full overflow-hidden'>
                        <div className='bg-[#a7000051] h-full w-full absolute flex justify-center items-center'></div>
                        <img src={playM.album.cover_big} className='w-screen h-screen' />
                        <div className='px-0 md:px-8 pt-2 md:pt-4 absolute top-5 left-3 md:left-7 text-white'>
                            <h2 className='font-bold text-[22px]'>{playM.album.title}</h2>
                            <div className='flex space-x-3 items-end'>
                                <p className='text-[14px]'>Lo mejor de {playM.artist.name}</p>
                                <p className='text-[10px]'>321, 123 seguidores</p>
                            </div>
                            <p className='text-[13px] leading-[20.19px] pt-5'>{playM.artist.name} (Tottenham, Londres, Inglaterra, 5 de mayo de 1988), conocida simplemente como {playM.artist.name}, es una cantante, compositora y multinstrumentista británica.</p>
                            {controlador == false ? (
                                <button className='bg-red-primary rounded-full py-2 px-5 mt-5'
                                    onClick={handleClickPlay}>Reproducir</button>
                            )
                                : (
                                    <button className='bg-red-primary rounded-full py-2 px-5 mt-5'
                                        onClick={handleClickPause}>Pausar</button>
                                )}
                        </div>
                    </div>

                </>
            )}
        </div>
    )
}

export default InfoMusic