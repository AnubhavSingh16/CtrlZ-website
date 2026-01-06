import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";

export const submitContactForm = async (data) => {
  try {
    await addDoc(collection(db, "contactSubmissions"), {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message || "",
      page: data.page,
      createdAt: serverTimestamp(),
    });

    return { success: true };
  } catch (error) {
    console.error("Firebase error:", error);
    return { success: false, error };
  }
};
