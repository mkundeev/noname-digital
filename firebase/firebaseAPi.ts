import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { auth, db } from "./configFB";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { setDoc, doc } from "firebase/firestore";

export async function authUser(
  phoneNumber: string,
  ref: FirebaseRecaptchaVerifierModal
) {
  try {
    const phoneProvider = new PhoneAuthProvider(auth);
    const verificationId = await phoneProvider.verifyPhoneNumber(
      phoneNumber,
      ref
    );
    return verificationId;
  } catch (err) {
    console.error(err);
  }
}
export async function verifyCode(
  verificationId: string,
  verificationCode: string
) {
  try {
    const credential = PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );
    await signInWithCredential(auth, credential);
  } catch (err) {
    console.error(err);
  }
}

export async function setUserData(
  userId: string,
  name: string,
  surname: string,
  date: string
) {
  try {
    await setDoc(doc(db, userId, "data"), {
      name,
      surname,
      date,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
