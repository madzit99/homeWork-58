import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import { CSSTransition } from "react-transition-group";

interface buttonConfig {
  type: string;
  label: string;
  onClick: () => void;
}

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: () => void;
  buttons: buttonConfig[];
}

const Modal: React.FC<Props> = ({
  show,
  title,
  onClose,
  buttons,
  children,
}) => {
  return (
    <>
      <Backdrop show={show} />
      <CSSTransition in={show} timeout={300} classNames="compon" unmountOnExit>
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
                {buttons.map((btn) => (
                  <button
                    key={btn.label}
                    className={`btn btn-${btn.type}`}
                    onClick={btn.onClick}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
