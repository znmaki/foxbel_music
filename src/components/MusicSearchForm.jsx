import { useNavigate } from "react-router-dom"
import React, { useContext } from 'react'
import MusicContext from '../context/MusicC'
import { HamburIcon, UserIcon } from "./Icons"
import { HOptionContext } from "../context"


const MusicSearchForm = () => {
    const { musicParamState, musicParam } = useContext(MusicContext)
    const { changeIdenti } = useContext(HOptionContext)

    const router = useNavigate();

    const handleChange = (e) => {
        musicParamState(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        router(`/search/${musicParam}`)
    }

    return (
        <article>
            <div className="flex items-center justify-between md:space-y-2 flex-wrap md:flex-nowrap">
                <div className="block md:hidden" onClick={changeIdenti}><HamburIcon /></div>
                <form onSubmit={handleSearch}>
                    <input onChange={handleChange} className="h-[36px] min-w-[445px] md:w-[524px] border border-gray-custze rounded-full pl-4" type="text" placeholder="Buscar" />
                </form>
                <div className="hidden md:flex  w-auto items-center justify-end space-x-3">
                    <div className="basis-[10%]">
                        <UserIcon />
                    </div>
                    <p className="basis-[90%]">Francisco M.</p>
                </div>
            </div>
        </article>
    )
}

export default MusicSearchForm