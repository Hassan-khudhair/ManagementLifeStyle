import Home from './pages/home.jsx';
import Heading from './components/Heading.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Todo from './components/Tasks/Todo.js';
import Notes from './components/Notes/Notes.js';
import Books from './components/Books/Books.js';
import Exersize from './components/Exersizes/Exersize.js';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebase.js';
import { useEffect, useState } from 'react';


function App() {

  // books section 
  const BooksCollectionRef = collection(db, 'books');
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    try {
      const data = await getDocs(BooksCollectionRef);
      const filteredData = data.docs.map((doc) => {
        return {
          ...doc.data(), id: doc.id
        }
      })
      setBooks(filteredData)
    } catch (error) {
      console.error(error)
    }
  }


  // notes section ?

  const notesCollectionRef = collection(db, 'notes');
  const [notes, setNotes] = useState([]);
  const getNotes = async () => {
    try {
      const data = await getDocs(notesCollectionRef);
      const filteredData = data.docs.map((doc) => {
        return {
          ...doc.data(), id: doc.id
        }
      })
      setNotes(filteredData)
    } catch (error) {
      console.error(error)
    }
  }



  // task section 
  const todocollectionref = collection(db, 'todo');
  const [todo, setTodo] = useState([]);
  const getTodo = async () => {
    try {
      const data = await getDocs(todocollectionref);
      const filteredData = data.docs.map((doc) => {
        return {
          ...doc.data(), id: doc.id
        }
      })
      setTodo(filteredData)
    } catch (error) {
      console.error(error)
    }
  }



  // exersize section 


  const exrDayOneCollectionRef = collection(db, 'exersizes/V3axnrV8tJWFEQEcMwKb/day-one');
  const exrDayTwoCollectionRef = collection(db, 'exersizes/V3axnrV8tJWFEQEcMwKb/day-two');
  const [exersizeDayOne, setExersizeDayOne] = useState([]);
  const [exersizeDayTwo, setExersizeDayTwo] = useState([]);

  const getExersizeDayOne = async () => {
    try {
      const data = await getDocs(exrDayOneCollectionRef);
      const filteredData = data.docs.map((doc) => {
        return {
          ...doc.data(), id: doc.id
        }
      })
      setExersizeDayOne(filteredData)
    } catch (error) {
      console.error(error)
    }
  }

  const getExersizeDayTwo = async () => {
    try {
      const data = await getDocs(exrDayTwoCollectionRef);
      const filteredData = data.docs.map((doc) => {
        return {
          ...doc.data(), id: doc.id
        }
      })
      setExersizeDayTwo(filteredData)
    } catch (error) {
      console.error(error)
    }
  }


  useEffect(() => {
    getBooks();
    getNotes();
    getTodo();
    getExersizeDayOne();
    getExersizeDayTwo();
  }, []);





  return (
    <div>
      <Heading />
      <BrowserRouter>
        <Routes>
          <Route path='/' >
            <Route index element={<Home books={books} notes={notes} todo={todo} exersizeDayOne={exersizeDayOne} exersizeDayTwo={exersizeDayTwo} />} />
            <Route path="/todo" element={<Todo todo={todo} setTodo={setTodo} todocollectionref={todocollectionref} getTodo={getTodo} />} />
            <Route path="/note" element={<Notes notesCollectionRef={notesCollectionRef} notes={notes} setNotes={setNotes} getNotes={getNotes} />} />
            <Route path="/book" element={<Books books={books} setBooks={setBooks} getBooks={getBooks} BooksCollectionRef={BooksCollectionRef} />} />
            <Route path="/exersize" element={<Exersize
              exrDayOneCollectionRef={exrDayOneCollectionRef}
              exrDayTwoCollectionRef={exrDayTwoCollectionRef}
              exersizeDayOne={exersizeDayOne}
              exersizeDayTwo={exersizeDayTwo}
              getExersizeDayOne={getExersizeDayOne}
              getExersizeDayTwo={getExersizeDayTwo}
            />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
