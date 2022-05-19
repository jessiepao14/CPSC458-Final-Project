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

export async function fetchFood(user_id) {
  let food = [];
  const q = query(collection(db, "food"), where("userId", "==", user_id));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((item) => {
    food.push(item.data());
  });
  return food;
}

export async function addFood(
  date,
  foodTitle,
  nf_calories,
  nf_protein,
  nf_total_carbohydrate,
  nf_total_fat,
  userId
) {
  try {
    const docRef = await addDoc(collection(db, "food"), {
      date: date,
      foodTitle: foodTitle,
      nf_calories: nf_calories,
      nf_protein: nf_protein,
      nf_total_carbohydrate: nf_total_carbohydrate,
      nf_total_fat: nf_total_fat,
      userId: userId,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
