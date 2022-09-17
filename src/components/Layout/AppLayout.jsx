import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import MusicSearchForm from "../MusicSearchForm";
import Header from "./Header"

export default function AppLayout() {    
    return (
        <div className="md:flex md:min-h-screen flex-wrap">
            <Header />
            <div className='md:w-[79.3%] px-10 md:h-screen overflow-y-scroll pt-8'>
                <MusicSearchForm />
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}