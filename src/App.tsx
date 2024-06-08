import { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal/Modal";
import Alert from "./Components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openAlert = () => {
    setShowAlert(true);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };



  return (
    <>
      <button className="btn btn-primary" onClick={openModal}>
        Открыть модальное окно
      </button>

      <button className="btn btn-primary" onClick={openAlert}>
        Открыть алерт
      </button>

      <Modal
        show={showModal}
        title={"Заголовок модального окна"}
        onClose={closeModal}
      >
        контент модального окна
      </Modal>

      <Alert show={showAlert} type={"primary"} onDismiss={closeAlert}>
        Контент алерта
      </Alert>
    </>
  );
}

export default App;
