import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import "./LoginStyles.css";

interface LoginModalProps {
  closeModal: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </span>
        <h2 className="title_modal">Login or Register</h2>
        <div className="options_forms">
          <LoginForm />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
