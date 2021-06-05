import { toast } from "react-toastify";

interface ToastProps {
  message: string;
}

export const toastInfo = ({ message }: ToastProps) => {
  toast.error(message, {
    style: { color: "rgba(0, 255, 0, 0.7)" },
    className: "bg-default-100 rounded-xl font-sourceSansPro font-bold",
    bodyClassName: "text-black",
  });
};

export const toastErr = ({ message }: ToastProps) => {
  toast.error(message, {
    style: { color: "rgba(255, 0, 0, 0.7)", backgroundColor: "#FFCCCC" },
    className: "bg-red-100 rounded-xl font-sourceSansPro font-bold",
    bodyClassName: "text-black",
  });
};
