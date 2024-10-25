import { useSelector } from "react-redux";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-4">Profile</h1>
      <form className="flex flex-col gap-3">
        <img
          className="w-24 h-24 rounded-full object-cover cursor-pointer self-center mt-2"
          src={currentUser.profilePicture}
          alt="profile"
        />
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
