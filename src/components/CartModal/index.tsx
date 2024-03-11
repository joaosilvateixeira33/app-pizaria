import "./CartModalStyles.css"

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
            <i className="bi bi-x-lg"></i>
        </span>
        <h2 className="title_modal">Your Cart</h2>
        <div className="modal-main">
            
        </div>

        <div className="modal-footer">
           <div className="total_price">
                R$ 00, 00
           </div>
            <button className="btn_finalize">
                <i className="bi bi-cash"></i> Finalize Purchase
            </button>
        </div>
      </div>
    </div>
  );
};
