import { useSelector } from "react-redux";
import { useRef, useState, useEffect } from "react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
export default function Profile() {
  const fileRef = useRef(null);
  const { currentUser } = useSelector((state) => state.user);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (file) {
      handleFileUpload(file);
    }
  }, [file]);
  const handleFileUpload = async (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePerc(Math.round(progress));
      },
      (error) => {
        console.log(error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-4">Profile</h1>
      <form className="flex flex-col gap-3">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          className="w-24 h-24 rounded-full object-cover cursor-pointer self-center mt-2"
          src={formData.profilePicture || currentUser.profilePicture}
          alt="profile"
        />
        <p className="text-center">
          {fileUploadError ? (
            <span className="text-red-500">
              Error Image Upload (Image must be less than 2 MB)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-600">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-600">Image successfully uploaded!</span>
          ) : (
            ""
          )}
        </p>

        <input
          type="text"
          placeholder="Username"
          id="username"
          className="p-3 rounded-lg border "
        />
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="p-3 rounded-lg border "
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="p-3 rounded-lg border "
        />
        <button className="border rounded-lg bg-slate-600 p-3 text-white uppercase hover:opacity-95 disabled:opacity-80">
          Update
        </button>
      </form>
      <div className="flex justify-between my-2">
        <span className="text-red-500 cursor-pointer">Delete Account</span>
        <span className="text-red-500 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
}
