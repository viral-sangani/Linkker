import { Dialog, Transition } from "@headlessui/react";
import Img from "next/image";
import { Fragment } from "react";
import ComingSoon from "../../../../public/static/coming-soon.png";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const AnalyticsModel: React.FC<Props> = ({ isOpen, closeModal }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-70" />
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-2xl font-bold leading-6 text-gray-900 mb-8"
              >
                Analytics
              </Dialog.Title>

              <div className="mt-2 flex flex-col items-center">
                <Img src={ComingSoon} />
                <span className="font-sourceSansPro text-4xl font-bold text-green-500">
                  Coming Soon
                </span>

                <span className="font-sourceSansPro text-xl font-bold text-green-700">
                  Hold On
                </span>
                <div className="mt-4 w-full">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center px-4 py-2 text-sm font-medium text-red-900 bg-red-100 rounded-md focus:outline-none "
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AnalyticsModel;
