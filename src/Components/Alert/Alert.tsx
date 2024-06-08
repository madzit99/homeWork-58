import { CSSTransition } from "react-transition-group";

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({ show, type, onDismiss, children }) => {
  return (
    <>
      <CSSTransition in={show} timeout={300} classNames="compon" unmountOnExit>
        <div
          className={`alert alert-${type} w-50 position-fixed top-25 start-50 translate-middle`}
          style={{ display: show ? "block" : "none", zIndex: "10000" }}
        >
          <div className="row">
            <div className="col">{children}</div>
            {onDismiss && (
              <button className="btn-close col-3" onClick={onDismiss}></button>
            )}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Alert;
