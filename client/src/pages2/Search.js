import React, { Component } from 'react';
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Container from "../components/Container"
import SearchInput from "../components/SearchInput"
import CardBtn from "../components/CardBtn"


class Search extends Component {
    state = {
        books: [],
        googleBooks: [],
        title: "",
        author: "",
        synopsis: ""
      };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.getGoogleBooks(this.state.title)
        .then(res => {
          this.setState({ googleBooks: res.data.items})
            
            console.log("State Google Books", this.state.googleBooks)

          }
        );
        console.log("here we are")
      // API.saveBook({
      //   title: this.state.title,
      //   author: this.state.author,
      //   synopsis: this.state.synopsis
      // })
      //   .then(res => this.loadBooks())
      //   .catch(err => console.log(err));
    }
  };

    render() {
        return (
            <div>
                <Navbar />
                <Hero />
                <Container>
                    <h3>Book Search</h3>
                    <p>Book</p>
                    <SearchInput
                      value={this.state.title}
                      onChange={this.handleInputChange}
                      name="title"
                      placeholder="Title (required)"
                      />
                      <button onClick={this.handleFormSubmit}>Search</button>
                </Container>
                <Container>
                {this.state.googleBooks.map(book => (
                <Card 
                key={book.id}
                title={book.volumeInfo.title} 
                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                author={book.volumeInfo.authors}
                synopsis={book.volumeInfo.description}
                link={book.volumeInfo.infoLink}
                handleDelete={this.handleDelete}
                />
                ))}
                </Container>
            </div>
        );
    }
}

export default Search;
