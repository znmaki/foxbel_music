import { useContext } from "react"
import { Link, useLocation } from "react-router-dom"
import { HOptionContext } from "@context"
import foxbelImg from '../../assets/images/foxbel-music@3x.png'

const Header = () => {
    const { hamburIdenti } = useContext(HOptionContext);
    const location = useLocation().pathname;
    return (
        <>
            
            <article className={`${hamburIdenti == true ? 'block' : 'hidden'}  bg-red-second md:block xl:block text-white md:w-[20.7%] pl-[40px]`}>
                <img className="w-[80%] pt-[10px] md:pt-[30px]" src={foxbelImg} alt="logo_foxbel" />
                <h2 className="text-[22px] font-bold mt-[30px]">Mi Librería</h2>
                <ul>
                    <li className={`${location === '/' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/'>Recientes</Link></li>
                    <li className={`${location === '/artists' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/artists'>Artistas</Link></li>
                    <li className={`${location === '/albums' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/albums'>Álbums</Link></li>
                    <li className={`${location === '/playlists' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/playlists'>Canciones</Link></li>
                    <li className={`${location === '/podcasts' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/podcasts'>Estaciones</Link></li>
                </ul>
                <h2 className="text-[22px] font-bold mt-[30px]">Playlist</h2>
                <ul>
                    <li className={`${location === '/metal' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/metal'>Metal</Link></li>
                    <li className={`${location === '/dance' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/dance'>Para bailar</Link></li>
                    <li className={`${location === '/rock 90s' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/rock 90s'>Rock 90s</Link></li>
                    <li className={`${location === '/balada' && 'text-red-primary border-l-[5px] border-red-primary ml-[-40px] pl-[35px]'}`}><Link to='/balada'>Baladas</Link></li>
                </ul>
            </article>

        </>
    )
}

export default Header