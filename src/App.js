import styles from './css/app.module.scss';

import Container from './components/Container/Container';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './Pages/HomePage'
import Feedback from './components/Feedback/Feedback';
import BooksPage from './components/BooksPage/BooksPage';
import AuthorsPage from './components/AuthorsPage/AuthorsPage';
import BookDetails from './components/BookDetails/BookDetails';
import Tests from './Pages/Tests'




const App = () => {
  
  return (

    <div className={styles.app}>
     
    <Header/>
    <Container> 
      <Routes>
    
        <Route path="/" element={<HomePage />} />
        <Route path="/feedback-page" element={<Feedback />} />
        <Route path="/books-page" element={<BooksPage />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/authors-page" element={<AuthorsPage />} />
        <Route path="/tests" element={<Tests />} />
        <Route
            path="*"
            element={<h1 className={styles.not__found}>404 -Page not found</h1>}
          />
      </Routes>
    </Container>


    </div>
  )
}


export default App;

