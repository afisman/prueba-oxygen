import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import SavedConversionList from './components/SavedConversionList/SavedConversionList';
import UnitConverter from './components/UnitConverter/UnitConverter';


function App() {
  return (
    <div className="App">
      <Navbar />
      <UnitConverter />
      <SavedConversionList />
      <Footer />
    </div>
  );
}

export default App;
