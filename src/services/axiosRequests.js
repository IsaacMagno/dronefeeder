import axios from "axios";

// export const BASE_URL = "http://localhost:8080";
export const BASE_URL = "https://dronefeeder-db.herokuapp.com";

export const getEntregas = async () => {
  const entregas = await axios.get(`${BASE_URL}/entrega`).then((o) => o.data);

  return entregas;
};

export const postEntrega = async (endereco, destinatario) => {
  const entrega = await axios
    .post(`${BASE_URL}/entrega`, { endereco, destinatario })
    .then((o) => o.data);

  return entrega;
};

export const deleteEntrega = async (id) => {
  const entrega = await axios
    .delete(`${BASE_URL}/entrega/${id}`)
    .then((o) => o.data);

  return entrega;
};

export const getDrone = async (id) => {
  const drone = await axios.get(`${BASE_URL}/drone/${id}`).then((o) => o.data);
  return drone;
};

export const getDroneList = async () => {
  const drone = await axios.get(`${BASE_URL}/drone`).then((o) => o.data);
  return drone;
};

export const getVideos = async () => {
  const videos = await axios.get(`${BASE_URL}/drone/video`).then((o) => o.data);
  return videos;
};
