import React from "react";
import Backdrop from "../Backdrop/Backdrop";

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ show, title, onClose, children }) => {
  return (
    <>
      <Backdrop show={show} />

      <div
        className="modal show"
        style={{ display: show ? "block" : "none" }}
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button
                type="button"
                className="close"
                style={{
                  border: "none",
                  background: "transparent",
                  marginLeft: "auto",
                }}
                onClick={onClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
