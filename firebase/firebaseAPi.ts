import {
  PhoneAuthProvider,
  signInWithCredential,
  signOut,
} from "firebase/auth";
import { auth, db } from "./configFB";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { UserData } from "../types/user.types";

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
  const credential = PhoneAuthProvider.credential(
    verificationId,
    verificationCode
  );
  await signInWithCredential(auth, credential);
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

export async function getUserData(userId: string) {
  const docRef = doc(db, userId, "data");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as UserData;
  } else {
    console.log("No such document!");
  }
}

export async function logOut() {
  try {
    await signOut(auth);
  } catch (err) {
    console.error(err);
  }
}
