import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase-config/firebaseConfig";
import { getBookSuccess, setSelectedBook } from "./bookSlice";

export const getBooksAction = () => async (dispatch) => {
  try {
    const q = query(collection(db, "books"));

    const querySnapshot = await getDocs(q);
    let books = [];

    querySnapshot.forEach((doc) => {
      const { id } = doc;

      const data = { ...doc.data(), id };
      books.push(data);
    });

    dispatch(getBookSuccess(books));
  } catch (error) {
    toast.error(error.message);
  }
};

export const addBookAction = (formData) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "books"), formData);

    if (docRef?.id) {
      toast.success("New Book has been added in the database.");
      dispatch(getBooksAction());
      return;
    }
    toast.error("unable to add the book, try again later.");
  } catch (error) {
    toast.error(error.message);
  }
};

//update book table
export const updateBooksAction = ({bookId,...rest}) => async (dispatch) => {
  try {
    // const q = query(collection(db, "books"));

    const updatePending =  setDoc(doc(db,"books", bookId),rest,{
      merge:true
    });
    toast.promise(updatePending,{
      pending:"please wait"
    })

    await updatePending
    toast.success("Book has been borrowed check the history") 
    await dispatch(getBooksAction())
    dispatch(setSelectedBook(bookId))

    

    

    //dispatch(getBookSuccess(books));
  } catch (error) {
    toast.error(error.message);
  }
};


//borrow book
export const addBorrowBookAction = (data) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "borrow"), data);

    if (docRef?.id) {
      toast.success("Book borrowed");


      //update book table
      const obj = {
        bookId:data.bookId,
        available:false,
        availableFrom: data.returnedAt,
      }
      dispatch(updateBooksAction(obj))
      
      return;
    }
    toast.error("unable to borrow the book, try again later.");
  } catch (error) {
    toast.error(error.message);
  }
}

export const deleteBookAction = (id) => async (dispatch) => {
  try {
    const deletePending =  deleteDoc(doc(db, "books",id));
    toast.promise(deletePending,{
      pending:"Please wait"
    })

    await deletePending
    

   
    toast.success("Book has been deleted");
    dispatch(getBooksAction())
  } catch (error) {
    toast.error(error.message);
  }
}