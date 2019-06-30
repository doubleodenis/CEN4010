/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from "react";
import './Book.css';
import {Card, Col, Button, ListGroup, ButtonGroup, Form} from "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';
import API from "../../utils/API";

function BookDetailsForm(props) {
    const [truebooks, setTrueBooks] = useState([]);
    const [books, setBooks] = useState([]);

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
                 <div className="description">
                  <img class="img" id="book-img" src={books.cover_url} alt="Book" />
                  <div className="book-info">
                    <h3> {books.title} </h3>
                    <a href="url">By {books.author}</a>
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
              <div style={{paddingTop: "3%"}}>
                    <p>Rate this book</p>
                    <div>
                    <div style={{display: 'inline-block', position: 'relative'}} className="rating-stars">
                        <StarRatingComponent  name={"Rate this book" } starCount={5} ></StarRatingComponent>
                    </div>
                    <p>Tell us what you think</p>
                    <textarea rows="4" cols="50"></textarea>  
                    <div style={{paddingTop: "1%"}}>
                    <Button type="submit">Submit</Button>
                    </div>
                    </div>
                </div>     
            </div>
          </div>
          </ListGroup.Item>
          </ListGroup>
          ))}
        </React.Fragment>   
        );
      
    }

export default BookDetailsForm;