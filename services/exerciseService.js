import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function fetchExercise(user_id) {
  let exercise = [];
  const q = query(collection(db, "exercise"), where("userId", "==", user_id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((item) => {
    exercise.push(item.data());
  });
  return exercise;
}

export async function addExercise(
  caloriesBurned,
  date,
  exercise,
  length,
  userId
) {
  try {
    const docRef = await addDoc(collection(db, "exercise"), {
      caloriesBurned: caloriesBurned,
      date: date,
      exercise: exercise,
      length: length,
      userId: userId,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
