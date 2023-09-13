import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'
function App() {

  return (
    <>

      <Header></Header>
      <main className='md:flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </main>

    </>
  )
}

export default App
