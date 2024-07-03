import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { Modal, Box } from "@mui/material";
import "./styles.scss";
// Substitua pelo caminho da sua imagem de coração
import coracaoIcon from "../../assets/coracao.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const coracaoIcone = new L.Icon({
  iconUrl: coracaoIcon,
  iconSize: [25, 25],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: iconShadow,
  shadowSize: [41, 41],
});

function ModalConteudo({ open, handleClose, conteudo }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Conteúdo do Modal */}
          {conteudo}
        </Box>
      </Modal>
    </div>
  );
}

const Mapa = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [conteudoModal, setConteudoModal] = React.useState(null);

  const handleOpenModal = (conteudo) => {
    setConteudoModal(conteudo);
    setModalOpen(true);
  };
  const handleCloseModal = () => setModalOpen(false);

  const posicaoInicial = [-15.793, -47.882]; // Centro do Brasil (aproximado)
  const marcadores = [
    {
      coordenadas: [-23.5505, -46.6333],
      nome: "São Paulo",
      icone: coracaoIcone,
    },
    {
      coordenadas: [-22.9068, -43.1729],
      nome: "Rio de Janeiro",
      icone: coracaoIcone,
    },
    // Adicione mais marcadores aqui
  ];

  return (
    <>
      <MapContainer
        center={posicaoInicial}
        zoom={4}
        style={{ height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {marcadores.map((marcador, index) => (
          <Marker
            position={marcador.coordenadas}
            icon={marcador.icone}
            key={index}
            eventHandlers={{
              click: () => handleOpenModal(marcador.nome),
            }}
          ></Marker>
        ))}
      </MapContainer>
      <ModalConteudo
        open={modalOpen}
        handleClose={handleCloseModal}
        conteudo={conteudoModal}
      />
    </>
  );
};

export default Mapa;
