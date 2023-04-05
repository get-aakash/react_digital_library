import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DefaultLayout } from "../../components/layout/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { addBorrowBookAction, getBooksAction } from "../books/bookAction";
import { Ratings } from "../../components/ratings/Ratings";
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase-config/firebaseConfig";


const defaultBorrowingdate = 14
const BookLanding = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { bookId } = useParams();
  const { selectedBook } = useSelector((state) => state.book);
  const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   !books.length && dispatch(getBooksAction());

  //   if(books.length){

  //   }
  // }, [books, dispatch]);

  useEffect(() => {
    !selectedBook.id && navigate("/");
  }, [navigate, selectedBook]);

  const { title, thumbnail, summary, available, ratings = 0 ,author, published, availableFrom} = selectedBook;

  const {uid} = user

  const handleOnBorrow = async() =>{
    if(!window.confirm("Are you sure you want to borrow the book"))return
    const today = new Date()
    const returnedAt= today.setDate(today.getDate()+ defaultBorrowingdate)
    const obj = {
      bookId: selectedBook.id,
      bookName: selectedBook.title,
      userId:user.uid,
      userName:user.name,
      borrowedAt: Date.now(),
      returnedAt

      
      
      
    };
    dispatch(addBorrowBookAction(obj))

    //add data in borrow table

    // update book vailable and available from property
    console.log(obj)
  
  
  

  //const bookRef = await updateDoc(collection(db, "books"),...obj1)
  
  }
  const date = new Date(availableFrom).toLocaleDateString()
  return (
    <DefaultLayout>
      <Container>
        <div className="mt-5">
          <Row>
            <Col sm="5">
              <img
                src={thumbnail}
                alt=""
                width="100%"
                className="border rounded p-1"
              />
            </Col>
            <Col sm="7">
              <div className="fw-bold fs-1">{title}</div>
              <Ratings rating={ratings} />
              <p>
                {author}-{published}
              </p>
              <p>{summary?.substr(0,200)}...</p>
              <p>
                {user.uid ? (
                  available ? (
                    <Button onClick={handleOnBorrow}  variant="primary"> Burrow Now</Button>
                  ) : (
                    <span className=" bg-info p-1 rounded text-primary">Available From: {date}</span>
                    
                  )
                ) : (
                  <Link to="/signin">Login to Burrow this book</Link>
                )}
              </p>
            </Col>
          </Row>

          <h3>Reviews</h3>
          <Row className="mt-3 border rounded p-3 mb-2">
            <Col sm="3">
              <div className="avatar">PA</div>
            </Col>
            <Col sm="9">
              <div className="message">
                <Ratings rating={5} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, sed corporis. Fuga nihil aliquam sed saepe
                  asperiores rerum, libero non nobis. Quae quaerat iste ea
                  accusantium, earum autem saepe veritatis.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 border rounded p-3 mb-2">
            <Col sm="3">
              <div className="avatar">PA</div>
            </Col>
            <Col sm="9">
              <div className="message">
                <Ratings rating={5} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, sed corporis. Fuga nihil aliquam sed saepe
                  asperiores rerum, libero non nobis. Quae quaerat iste ea
                  accusantium, earum autem saepe veritatis.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="mt-3 border rounded p-3 mb-2">
            <Col sm="3">
              <div className="avatar">PA</div>
            </Col>
            <Col sm="9">
              <div className="message">
                <Ratings rating={5} />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, sed corporis. Fuga nihil aliquam sed saepe
                  asperiores rerum, libero non nobis. Quae quaerat iste ea
                  accusantium, earum autem saepe veritatis.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default BookLanding;
