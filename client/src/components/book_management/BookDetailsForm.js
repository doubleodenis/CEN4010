/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from "react";
import {Card, Col, Button, ListGroup, ButtonGroup, Form} from "react-bootstrap";
import API from "../../utils/API";

function BookDetailsForm(props) {
    const [truebooks, setTrueBooks] = useState([]);
    const [books, setBooks] = useState([]);
    const [formCheck, setFormCheck] = useState(false);
    const [bookID]  = useState(props._id);
    const [bookTitle, setTitle] = useState("");
    const [bookDescription, setDescription] = useState("");
    const [bookGenre, setGenre] = useState("");
    const [bookPublisher, setPublisher] = useState("");
    const [bookPublish_date, setPublish_date] = useState("");
    const [bookPrice, setPrice] = useState("");
    const [bookCover_url, setCover_url] = useState("");
    const [bookAuthor, setAuthor] = useState("");
    const [bookAuthorBio, setAuthorBio] = useState("");

    useEffect(() => {
        updatetruebooks();
    }, []);

    function updatetruebooks() {
        console.log("Updating books");
        API.getBooksByPage(1)
        .then(res => {
            console.log(res.data);
            setTrueBooks(res.data);
            setBooks(res.data);
        })
        .catch(err => console.log(err));
    }

        return (
          <React.Fragment>  
          {books.map((books, index) => (  
              <ListGroup key={index}>
              <ListGroup.Item key={index}>
          <div className="card">
          <div className="book">
              <div>
                <h1> {books.title} </h1>
                <div className="description">
                  <img id="book-img" src={books.bookCover_url} alt="Book" />
                  <div className="book-info">
                    <h3> By {books.author} </h3>
                    <p> Publisher: {books.publisher} </p>
                    <p> Price: {books.price} </p>
                    <p > Genre: {books.genre} </p>
                    <div className="descrption"> <p>Description: {books.description} </p>
                    </div>
                  </div>
                </div>
                <div className="Autor_Biography"  >Autor biography:<p > {books.author_bio} </p>
                    </div>
              </div >
            }
          </div>
          </div>
          </ListGroup.Item>
          </ListGroup>
          ))}
        </React.Fragment>   
        );
      
    }

export default BookDetailsForm;