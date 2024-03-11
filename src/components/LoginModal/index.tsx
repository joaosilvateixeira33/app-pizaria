import React, { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import "./LoginStyles.css";

interface LoginModalProps {
  closeModal: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ closeModal }) => {
  const [activeForm, setActiveForm] = useState<"login" | "register">("login");

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </span>
        <h2 className="title_modal"> {activeForm === "login" ? "Login" : "Register"}</h2>
        <div className="options_forms">
          <button
            onClick={() =>
              setActiveForm(activeForm === "login" ? "register" : "login")
            }
           className="btn_choose">
            {activeForm === "login" ? "Register" : "Login"}
          </button>
          {activeForm === "login" ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </div>
  );
};
