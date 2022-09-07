import { Component } from 'react';
import axios from 'axios';
import styles from './AuthorsPage.module.scss';
import { NavLink, Route, Routes } from 'react-router-dom';

class AuthorsPage extends Component {
    state = {
        authors: [],
    };

    async componentDidMount() {
        const response = await axios.get('http://localhost:4040/authors');

        this.setState({ authors: response.data });
    }

    render() {
        return (
            <div className={styles.authors}>
                <h1>This is page of authors of a books</h1>
                <ul className={styles.list}>
                    {this.state.authors.map(author => (
                        <li key={author.id}>
                            <NavLink to={`/authors-page/${author.id}`}>
                                {author.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <Routes>
                    <Route
                        exact
                        path="/authors-page/:authorsId"
                        render={<h1>Components of books</h1>}
                    />
                </Routes>
            </div>
        );
    }
}

export default AuthorsPage;
