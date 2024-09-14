import auth from "@/firebase/firebaseConfig";
import { signOut } from "firebase/auth";

export const handleSignOut = () => {
    signOut(auth).then(() => {
        alert('logged out');
    }).catch((error) => {
        console.log(error);
    });
}