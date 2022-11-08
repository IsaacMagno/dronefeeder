import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setEntrega } from "../Redux/reducers/droneSlice";
import {
  postEntrega,
  deleteEntrega,
  getDrone,
  getVideos,
} from "../services/axiosRequests";

const CallDrone = () => {
  const [endereco, setEndereco] = useState();
  const [destinatario, setDestinatario] = useState();
  const [droneStatus, setDroneStatus] = useState("none");
  const [videoUrl, setVideoUrl] = useState();
  const [videosList, setVideosList] = useState();

  const dispatch = useDispatch();

  useEffect(() => {}, [videoUrl]);

  useEffect(() => {
    const videos = async () => {
      setVideosList(await getVideos());
    };

    videos();
  }, []);

  const droneCaller = async (e) => {
    e.preventDefault();

    await postEntrega(endereco, destinatario);

    dispatch(setEntrega([{ endereco, destinatario }]));

    setDroneStatus("preparando");

    const vidUrl = videosList.filter((video) => video.nome == "preparando");

    setVideoUrl(vidUrl[0].url);
  };

  const videoHandler = async () => {
    if (droneStatus == "preparando") {
      setDroneStatus("rota de entrega");

      const vidUrl = videosList.filter(
        (video) => video.nome == "rota de entrega"
      );

      return setVideoUrl(vidUrl[0].url);
    }

    if (droneStatus == "rota de entrega") {
      setDroneStatus("descarregando");
      const vidUrl = videosList.filter(
        (video) => video.nome == "descarregando"
      );
      return setVideoUrl(vidUrl[0].url);
    }

    if (droneStatus == "descarregando") {
      const { entregas } = await getDrone(4);
      const { id } = entregas[0];
      deleteEntrega(id);
      setDroneStatus("entregue");
    }
  };

  return (
    <div className='relative min-h-screen flex flex-col items-center justify-center text-center  py-0 px-3'>
      <div className='top-0 left-0 w-full h-full overflow-hidden flex justify-center'>
        {droneStatus == "none" ? (
          <div
            className='rounded bg-gray-300 p-8 min-h-full max-w-xl'
            id='form-div'
          >
            <h1 className='text-black/50 mb-4 font-bold text-3xl'>
              Agende agora sua entrega!
            </h1>
            <p className='text-black/50 mb-5 font-thin text-xl'>
              Preencha os campos abaixo e aguarde a confirmação do seu drone.
            </p>
            <form
              className='flex flex-col justify-center'
              onSubmit={droneCaller}
            >
              <input
                type='text'
                name='endereco'
                placeholder='Endereço'
                className='bg-white/20 rounded-xl px-3 py-2 my-2'
                onChange={({ target }) => setEndereco(target.value)}
              />
              <input
                type='text'
                name='destinatario'
                placeholder='Destinatario'
                className='bg-white/20 rounded-xl px-3 py-2 my-2'
                onChange={({ target }) => setDestinatario(target.value)}
              />
              <button className='text-black/50 hover:cursor-pointer px-3 py-2 rounded bg-green-500 hover:bg-green-400 mt-12 self-center'>
                Chamar Drone!
              </button>
            </form>
          </div>
        ) : (
          <div>
            {droneStatus != "entregue" ? (
              <video
                width={700}
                autoPlay
                muted
                onEnded={() => videoHandler()}
                className='min-w-full min-h-full rounded'
                src={videoUrl}
              ></video>
            ) : (
              <div className='text-white flex justify-center flex-col'>
                <h1 className=' mb-4 font-bold text-3xl'>Parabéns!</h1>
                <p className=' mb-5 font-semibold text-xl'>
                  Sua entrega foi realizada com sucesso!
                </p>
                <button
                  onClick={() => setDroneStatus("none")}
                  className='text-black/50 hover:cursor-pointer px-3 py-2 rounded bg-green-500 hover:bg-green-400 mt-12 self-center'
                >
                  Nova entrega
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CallDrone;
