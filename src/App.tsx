import { useState } from "react";
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

  const btnConfig = [
    {
      type: "primary",
      label: "Continue",
      onClick: openAlert,
    },
    {
      type: "danger",
      label: "Close",
      onClick: closeModal,
    },
  ];

  return (
    <>
      <button className="btn col-4 m-5 btn-danger" onClick={openModal}>
        Открыть модальное окно
      </button>

      <button className="btn col-4 btn-secondary" onClick={openAlert}>
        Открыть алерт
      </button>

      <Modal
        show={showModal}
        title={"Заголовок модального окна"}
        onClose={closeModal}
        buttons={btnConfig}
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
