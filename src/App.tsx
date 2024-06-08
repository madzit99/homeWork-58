import { useState } from 'react'
import './App.css'
import Modal from './Components/Modal/Modal';

function App() {

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={openModal}
      >
        Открыть модальное окно
      </button>

      <Modal show={showModal} title={"Заголовок модального окна"} onClose={closeModal} >
        контент модального окна
      </Modal>
    </>
  );
}

export default App
