
import './App.css';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Rowpost from './components/Rowpost/Rowpost';
import { Netflixoriginals, old, toprated, trending, upcoming } from './urls';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title='Originals' urls={Netflixoriginals}  />
      <Rowpost title='Trending' isSmall urls={trending} />      
      <Rowpost title='Upcoming' isSmall urls={upcoming}/>
      <Rowpost title='Top Rated' isSmall urls={toprated}/>
      <Rowpost title='Classic' isSmall urls={old}/>
      <Rowpost/>





      
    </div>
  );
}

export default App;
