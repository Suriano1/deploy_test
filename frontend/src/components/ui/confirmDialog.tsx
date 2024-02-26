import { IoAlertCircleOutline } from "react-icons/io5";
interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
  confirmButtonLabel: string;
}
export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  message,
  confirmButtonLabel,
}: ConfirmDialogProps) => {
  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-72 h-52 bg-[#182237] rounded-xl flex flex-col items-center justify-between px-4 py-1">
          <div className="flex flex-col items-center gap-2 p-4 w-3/4">
            <IoAlertCircleOutline className="text-red-500 size-12" />
            <p className="font-medium text-[#b7bac1] text-xl text-center">
              {message}
            </p>
          </div>
          <div className="flex w-full justify-evenly">
            <button
              onClick={onClose}
              className="font-semibold text-[#b7bac1] text-xl p-2 hover:scale-105 duration-100"
            >
              Voltar
            </button>
            <div className="h-3/4 bg-[#b7bac1] w-0.5 self-center" />
            <button
              onClick={onConfirm}
              className="font-semibold text-[#b7bac1] text-xl p-2 hover:scale-105 duration-100"
            >
              {confirmButtonLabel}
            </button>
          </div>
        </div>
      </div>
    );
  }
  return null;
};
