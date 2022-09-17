import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HOptionProvider, MusicProvider } from "@context";
import { AppLayout } from "@components";
import { MusicList, MusicId } from "@pages"
import OptionsPage from "./pages/OptionsPage";
import RecientPag from "./pages/RecientPag";

function App() {
  return (
    <HOptionProvider>
      <MusicProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />}>
              <Route index element={<RecientPag/>} />
              <Route path=":options" element={<OptionsPage/>} />
              <Route path="search">
                <Route path=":music" element={<MusicList />} />
                <Route path=":music/:id" element={<MusicId />} />
              </Route>
            </Route>
            <Route path="*" element={<>404 Error</>} />
          </Routes>
        </BrowserRouter>
      </MusicProvider>
    </HOptionProvider>
  )
}

export default App
