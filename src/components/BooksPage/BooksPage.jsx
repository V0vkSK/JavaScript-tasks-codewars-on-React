import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import styles from './BooksPage.module.scss';

const BooksPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4040/books/')
            .then(({ data }) => setBooks(data));
    }, []);
    console.log(books);
    return (
        <div className={styles.books}>
            <h1>This is page of books</h1>
            <ul className={styles.list}>
                {books.map(({ id, title }) => (
                    <li key={id}>
                        <NavLink to={`../books/${id}`} key={id}>
                            {title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default BooksPage;

// class BooksPage extends Component {
//     state = {
//         books: [],
//     };

//     async componentDidMount() {
//         const response = await axios.get('http://localhost:4040/books');

//         this.setState({ books: response.data });
//     }

//     render() {
//         return (
//             <div className={styles.books}>
//                 <h1>This is page of books</h1>
//                 <ul className={styles.list}>
//                     {this.state.books.map(book => (
//                         <li key={book.id}>
//                             <Link to={`/books/${book.id}`}>{book.title}</Link>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     }
// }

// export default BooksPage;
