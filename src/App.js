import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import SavedConversionList from './components/SavedConversionList/SavedConversionList';
import UnitConverter from './components/UnitConverter/UnitConverter';
import { createStore } from 'redux';
import { Provider, connect, useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';


// const conversionReducer = function(state = [], action) {
//   switch (action.type) {
//     case 'Add':
//       return state.push()
//   }
// }

// const store = createStore(conversionReducer)

function App() {

  const [conversionUnits, setConversionUnits] = useState(0);
  const [input, setInput] = useState(0);
  const [conversionResult, setConversionResult] = useState(0);
  const [savedConversionsArr, setSavedConversionsArr] = useState([])

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

  const saveConversion = () => {
    const newSavedConversion = {
      input: `${input} ${conversionUnitsList[conversionUnits].from}`,
      result: `${conversionResult} ${conversionUnitsList[conversionUnits].to}`,
      id: window.self.crypto.randomUUID()
    }
    setSavedConversionsArr([...savedConversionsArr, newSavedConversion])
    setConversionUnits(0);
    setInput(0)
    setConversionResult(0);
  }

  const handleDeleteConversion = (id) => {
    setSavedConversionsArr(savedConversionsArr.filter(conversion => conversion.id !== id))
  }




  return (
    <div className="App">
      <Navbar />
      <UnitConverter
        conversionUnitsList={conversionUnitsList}
        input={input}
        setInput={setInput}
        conversionResult={conversionResult}
        setConversionResult={setConversionResult}
        conversionUnits={conversionUnits}
        setConversionUnits={setConversionUnits}
        saveConversion={saveConversion}
      />
      <SavedConversionList
        savedConversionsArr={savedConversionsArr}
        handleDeleteConversion={handleDeleteConversion}
      />
      <Footer />
    </div>
  );
}

export default App;
