import { useState } from "react";
import trashIcon from "../../images/Trash.svg";
import infoIcon from "../../images/Vectorheart.svg"; // ícone branco (não curtido)
import likedIcon from "../../images/BlackHeart.svg"; // ícone preto (curtido)

// Componente funcional Card
function Card({ card, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar o modal
  const [isLiked, setIsLiked] = useState(false); // Estado para controlar o curtir/descurtir

  // Função para abrir o modal
  function openModal() {
    setIsModalOpen(true);
  }

  // Função para fechar o modal
  function closeModal() {
    setIsModalOpen(false);
  }

  // Função para alternar entre curtir e descurtir
  function toggleLike() {
    setIsLiked(!isLiked);
  }

  // Função para deletar o card
  function handleDelete() {
    if (onDelete) {
      onDelete(card._id); // Passa o ID do card para a função de callback
    }
  }

  return (
    <>
      <li className="card__content">
        {/* Imagem do card */}
        <img
          className="card__image"
          src={card.link}
          alt={card.name}
          onClick={openModal} // Abre o modal ao clicar na imagem
        />
        {/* Ícone de lixeira */}
        <img
          className="card__trash-icon"
          src={trashIcon}
          alt="Deletar card"
          onClick={handleDelete} // Chama a função ao clicar
        />
        {/* Informações do card */}
        <div className="card__info">
          <p className="card__info-title">{card.name}</p>
          <img
            className="card__info-icon"
            src={isLiked ? likedIcon : infoIcon} // Alterna o ícone com base no estado
            alt={isLiked ? "Descurtir" : "Curtir"}
            onClick={toggleLike} // Alterna entre curtir e descurtir ao clicar
          />
        </div>
      </li>

      {/* Modal para exibir a imagem ampliada */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
            <img className="modal__image" src={card.link} alt={card.name} />
            <p className="modal__caption">{card.name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
