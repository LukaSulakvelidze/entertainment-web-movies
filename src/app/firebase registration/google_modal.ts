import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/app/firebase registration/fireBase_config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    console.log("User:", user);
    console.log("Token:", token);
  } catch (error: any) {
    console.error("Error during sign-in:", error);
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.error("Error code:", errorCode);
    console.error("Error message:", errorMessage);
    console.error("Error email:", email);
    console.error("Error credential:", credential);
  }
};

export default handleGoogleSignIn