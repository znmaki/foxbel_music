import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Music from "../components/Music";
import { musicService } from "@services";
import InfoMusic from "../components/InfoMusic";

export default function MusicList() {
  const [music, setMusic] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const getMusic = async () => {
    await musicService("search", params.music)
      .then(rs => {
        setMusic(rs.data.data);
        setLoading(false)
      })
  }
  useEffect(() => {
    getMusic()
  }, [params.music])
  return (
    <>
      {loading && (<div>Cargando...</div>)}
      {!loading &&
        (
          <div>
            <InfoMusic />
            <h2 className="font-bold text-red-primary mb-10">Resultados</h2>
            <div className='grid grid-cols-3 gap-x-7 md:gap-x-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-7 pb-[10rem]'>
              {music.map(song =>
                <Music
                  key={song.id}
                  song={song}
                />
              )}
            </div>
          </div>
        )
      }
    </>
  )
}