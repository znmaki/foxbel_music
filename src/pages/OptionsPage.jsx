import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { musicService } from "@services";
import InfoMusic from '../components/InfoMusic';
import Music from '../components/Music';

const OptionsPage = () => {
  const params = useParams()
  const [loading, setLoading] = useState(true);
  const [opciones, setOpciones] = useState([]);

  const getOptions = async () => {
    await musicService("search", params.options)
      .then(rs => {
        setOpciones(rs.data.data);
        setLoading(false)
      })
  }

  useEffect(() => {
    getOptions()
  }, [params.options])

  return (
    <>
      {loading && (<div>Cargando...</div>)}
      {!loading &&
        (
          <div>
            <InfoMusic />
            <h2 className="font-bold text-red-primary mb-10">Resultados</h2>
            <div className='grid grid-cols-3 gap-x-7 md:gap-x-0 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-7 pb-[10rem]'>
              {opciones.map(song =>
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

export default OptionsPage