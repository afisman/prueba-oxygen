import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import SavedConversionList from './components/SavedConversionList/SavedConversionList';
import UnitConverter from './components/UnitConverter/UnitConverter';
import { useState } from 'react';



function App() {

  const [conversionUnits, setConversionUnits] = useState(0);
  const [input, setInput] = useState(0);
  const [conversionResult, setConversionResult] = useState(0);

  const conversionUnitsList = [
    {
      index: 0,
      from: 'km',
      to: 'miles',
      conversionRate: 0.6213711922
    },
    {
      index: 1,
      from: 'miles',
      to: 'km',
      conversionRate: 1.609344
    },
    {
      index: 2,
      from: 'feet',
      to: 'meters',
      conversionRate: 0.3048
    },
    {
      index: 3,
      from: 'meters',
      to: 'feet',
      conversionRate: 3.2808399
    },
    {
      index: 4,
      from: 'cm',
      to: 'inches',
      conversionRate: 0.3937007874
    },
    {
      index: 5,
      from: 'inches',
      to: 'cm',
      conversionRate: 2.54
    },
  ]

  const reverseConversion = () => {
    if (conversionUnitsList[conversionUnits].from === 'miles') {
      setConversionUnits(0);
    } else if (conversionUnitsList[conversionUnits].from === 'km') {
      setConversionUnits(1);
    } else if (conversionUnitsList[conversionUnits].from === 'meters') {
      setConversionUnits(2);

    } else if (conversionUnitsList[conversionUnits].from === 'feet') {
      setConversionUnits(3);

    } else if (conversionUnitsList[conversionUnits].from === 'inches') {
      setConversionUnits(4);
    }
    else if (conversionUnitsList[conversionUnits].from === 'cm') {
      setConversionUnits(5);
    }
  }


  return (
    <div className="App">
      <Navbar reverseConversion={reverseConversion}
      />
      <UnitConverter
        conversionUnitsList={conversionUnitsList}
        input={input}
        setInput={setInput}
        conversionResult={conversionResult}
        setConversionResult={setConversionResult}
        conversionUnits={conversionUnits}
        setConversionUnits={setConversionUnits}
        reverseConversion={reverseConversion}
      />
      <SavedConversionList />
      <Footer />
    </div>
  );
}

export default App;
