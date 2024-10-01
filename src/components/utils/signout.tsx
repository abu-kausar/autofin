import auth from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

export const handleSignOut = () => {
    signOut(auth).then(() => {
        toast.success('Logout successful');
    }).catch((error) => {
        toast.error('Logout failed');
        console.log(error);
    });
}