type ModalProps = { 
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ children, isOpen, onClose }: ModalProps ) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="bg-gray-50 rounded-lg p-4 shadow-xl">
            <button onClick={onClose} className="w-x bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right h-10">
              X
            </button>
            <div className="mt-12 w-full h-5/6">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;