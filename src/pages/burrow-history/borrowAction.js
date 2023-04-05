
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config/firebaseConfig";
import { setborrow } from "./borrowSlice";


export const getBorrowAction = ({userId}) => async (dispatch) => {
  try {
    const q = query(collection(db, "books"), where("userId", "==", userId));

    const querySnapshot = await getDocs(q);
    let borrow = [];

    querySnapshot.forEach((doc) => {
      const { id } = doc;

      const data = { ...doc.data(), id };
      borrow.push(data);
    });

    dispatch(setborrow(borrow));
  } catch (error) {
    toast.error(error.message);
  }
};
