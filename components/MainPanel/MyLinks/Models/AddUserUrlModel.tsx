import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useCallback, useState } from "react";
import Dropzone from "react-dropzone";
import { DeleteIcons } from "../../../common/icons/delete";
import { TextField } from "../../../common/TextField";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
}

const AddUserUrlModel: React.FC<Props> = ({ isOpen, closeModal }) => {
  const [imageUrl, setImageUrl] = useState("/static/icons/link.png");
  const [toggledropDownBg, setToggleDropDownBg] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<any>();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const acceptedImageType = ["image/jpeg", "image/jpg", "image/png"];

  const onDrop = useCallback((acceptedFiles) => {
    if (
      acceptedFiles.length === 1 &&
      acceptedImageType.indexOf(acceptedFiles[0].type) > -1
    ) {
      setUploadedFile(acceptedFiles[0]);
      setImageUrl(URL.createObjectURL(acceptedFiles[0]));
      console.log("acceptedFiles :>> ");
    }
  }, []);

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
            <div className="inline-block max-w-4xl w-full p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <Dialog.Title
                as="h3"
                className="text-2xl font-bold leading-6 text-gray-900 mb-8"
              >
                Add URL to your profile
              </Dialog.Title>

              <div className="mt-2 flex flex-col items-start">
                <div className="flex flex-row items-center justify-center w-full">
                  <img src={imageUrl} height={90} width={90} />
                  <div className="flex flex-col items-start w-full ml-5">
                    <label className="font-sourceSansPro font-semibold text-lg">
                      Title
                    </label>
                    <TextField
                      type="text"
                      value={title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />

                    <label className="font-sourceSansPro font-semibold text-lg mt-4">
                      Url
                    </label>
                    <TextField
                      type="text"
                      value={url}
                      onChange={(e) => {
                        setUrl(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="mt-10 w-full border-dashed border-2 h-52 p-1 rounded-xl cursor-pointer">
                  <Dropzone
                    onDrop={onDrop}
                    accept="image/jpeg, image/png"
                    onDropRejected={() => {
                      console.log("File rejected");
                    }}
                    onDragEnter={() => setToggleDropDownBg(true)}
                    onDragLeave={() => setToggleDropDownBg(false)}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <div
                        className={`${
                          toggledropDownBg ? `bg-gray-200` : `bg-gray-100`
                        } h-full w-full rounded-xl flex justify-center items-center transition duration-300`}
                        {...getRootProps()}
                      >
                        <input {...getInputProps()} />
                        <div className="flex flex-col justify-center items-center">
                          <span className="font-sourceSansPro font-bold text-2xl text-gray-500">
                            Upload custom image for your Link here.
                          </span>
                        </div>
                      </div>
                    )}
                  </Dropzone>
                </div>

                {uploadedFile && (
                  <div className="flex flex-row space-x-4 mt-4">
                    <span className="font-sourceSansPro font-semibold text-lg text-gray-500 mt-1">
                      {uploadedFile && uploadedFile.name}
                    </span>
                    <div
                      onClick={() => {
                        setUploadedFile(null);
                        setImageUrl("/static/icons/link.png");
                      }}
                    >
                      <DeleteIcons />
                    </div>
                  </div>
                )}

                <div className="mt-6 w-full flex flex-row space-x-3">
                  <button
                    className="h-12 w-full inline-flex justify-center items-center px-4 py-2 text-lg font-bold text-green-900 bg-green-100 rounded-md focus:outline-none "
                    type="button"
                    onClick={closeModal}
                  >
                    Save
                  </button>
                  <button
                    className="h-12 w-full inline-flex justify-center items-center px-4 py-2 text-lg font-bold text-red-900 bg-red-100 rounded-md focus:outline-none "
                    type="button"
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

export default AddUserUrlModel;
