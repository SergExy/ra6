import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import WatchesRoute from './routes/watchesRoute/WatchesRoute'
import CrudRoute from './routes/crudRoute/CrudRoute'

const HomeLinks = () => (
  <ol>
    <li><Link to={'/ra6/watches'}>Мировые часы</Link></li>
    <li><Link to={'/ra6/crud'}>CRUD</Link></li>
  </ol>
)

function App() {
  return (
    <Routes>
      <Route path='/ra6/' element={<HomeLinks />} />
      <Route path='/ra6/watches' element={<WatchesRoute />} />
      <Route path='/ra6/crud' element={<CrudRoute />} />
    </Routes>
  )
}

export default App
