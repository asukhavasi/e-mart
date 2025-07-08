
import './App.css'

import LandingPage from './stores/pages/LandingPage'
import { Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import MobilePage from './stores/pages/MobilePage'
import ComputerPage from './stores/pages/ComputerPage'
import SpeakerPage from './stores/pages/SpeakerPage'
import WatchesPage from './stores/pages/WatchesPage'
import FurniturePage from './stores/pages/FurniturePage'
import TvPage from './stores/pages/TvPage'
import MobileSingle from './singles/MobileSingle'
import UserCart from './UserCart'
import ComputerSingle from './singles/ComputerSingle'
import SpeakerSingle from './singles/SpeakerSingle'
import WatchSingle from './singles/WatchSingle'
import FurnitureSingle from './singles/FurnitureSingle'
import TvSingle from './singles/TvSingle'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <div class="maindiv">
      <Routes>
        <Route path='/' element= {<LandingPage />}> </Route>
        <Route path='/mobiles' element={<MobilePage/>}></Route>
        <Route path='/computers' element={<ComputerPage/>}></Route>
        <Route path='/speakers' element={<SpeakerPage/>}></Route>
        <Route path='/watches' element={<WatchesPage/>}></Route>
        <Route path='/furniture' element={<FurniturePage/>}></Route>
        <Route path='/tv' element={<TvPage/>}></Route>
          <Route path='/mobiles/:id' element={<MobileSingle/>}></Route>
          <Route path='/computers/:id' element={<ComputerSingle/>}></Route>
          <Route path='/speakers/:id' element={<SpeakerSingle/>}></Route>
          <Route path='/watches/:id' element={<WatchSingle/>}></Route>
          <Route path='/furniture/:id' element={<FurnitureSingle/>}></Route>
          <Route path='tv/:id' element={<TvSingle/>}></Route>
        <Route path='/cart' element={<UserCart/>}></Route>


         
      </Routes>
    </div>
  )
}

export default App
