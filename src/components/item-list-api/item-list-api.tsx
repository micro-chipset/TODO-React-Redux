import * as React from "react";
import {Component} from "react";
import LibraryService from "../../services/library-service";

import './item-list-api.css'
import Spinner from "../spinner/spinner";
import ErrorMessage from "../error-message/error-message";

export default class ItemListApi extends Component {

    libraryService = new LibraryService();

    state = {
        book: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        this.updateBook();
        setInterval(this.updateBook, 1000);
    }

    onBookLoaded = (book) => {
        this.setState({
            book,
            loading: false
        });
    };


    updateBook = () => {
        const id = Math.floor(Math.random() * 8) + 2;
        this.libraryService
            .getBook(id)
            .then(this.onBookLoaded)
            .catch(this.onError);
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    render() {
        const {book, loading, error} = this.state;

        const hasData = !(loading || error);

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = hasData ? <BookView book={book} /> : null;

        return (
            <div className="wrapper-book">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const  BookView = ({book}) => {

    const {id, image_url} = book;

    return (
        <div className="wrapper-book">
            <img src={`${image_url}`}
                 alt="book" />
            <div>
                <span>ID</span>
                <span>{id}</span>
            </div>
        </div>
    );
};
