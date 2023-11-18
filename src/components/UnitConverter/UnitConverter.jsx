import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoArrowSwitch } from "react-icons/go";


import './UnitConverter.css'

const UnitConverter = ({ conversionUnitsList, input, setInput, conversionResult, setConversionResult, conversionUnits, setConversionUnits, saveConversion }) => {

    // const [conversionUnits, setConversionUnits] = useState(0);
    // const [input, setInput] = useState(0);
    // const [conversionResult, setConversionResult] = useState(0);

    // const conversionUnitsList = [
    //     {
    //         index: 0,
    //         from: 'km',
    //         to: 'miles',
    //         conversionRate: 0.6213711922
    //     },
    //     {
    //         index: 1,
    //         from: 'miles',
    //         to: 'km',
    //         conversionRate: 1.609344
    //     },
    //     {
    //         index: 2,
    //         from: 'feet',
    //         to: 'meters',
    //         conversionRate: 0.3048
    //     },
    //     {
    //         index: 3,
    //         from: 'meters',
    //         to: 'feet',
    //         conversionRate: 3.2808399
    //     },
    //     {
    //         index: 4,
    //         from: 'cm',
    //         to: 'inches',
    //         conversionRate: 0.3937007874
    //     },
    //     {
    //         index: 5,
    //         from: 'inches',
    //         to: 'cm',
    //         conversionRate: 2.54
    //     },
    // ]

    // const saveConversion = () => {
    //     setConversionUnits(0);
    //     setInput(0)
    //     setConversionResult(0);
    // }

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

    const handleConversion = (e) => {
        const result = e * conversionUnitsList[conversionUnits].conversionRate;
        const fixedResult = result.toFixed(2);
        setConversionResult(fixedResult);
    }
    useEffect(() => {
        handleConversion(input);
    }, [input, conversionUnits])

    return (
        <div className='converter'>
            <div className='converter_box'>
                <div className='converter_box_title'>
                    <h1>
                        convert
                    </h1>
                </div>
                <div className='converter_box_input'>
                    <div className='converter_box_input_select'>
                        <select name="distance" value={0} onChange={e => setConversionUnits(e.target.value)}>
                            <option value="0" >km - miles</option>
                            <option value="1">miles - km</option>
                            <option value="2">feet - meters</option>
                            <option value="3">meters - feet</option>
                            <option value="4">cm - inches</option>
                            <option value="5">inches - cm</option>
                        </select>
                        <GoArrowSwitch className='converter_box_input_select_icon' onClick={() => reverseConversion()} />
                    </div>
                    <div className='converter_box_input_amount'>
                        <input type="number" value={input} onChange={e => setInput(e.target.value)} placeholder='0' />
                        {conversionUnitsList[conversionUnits].from}
                    </div>
                </div>
                <div className='converter_box_bottom'>
                    <div className='converter_box_bottom_icon'>
                        <p onClick={() => saveConversion()}>
                            <AiOutlineHeart />
                        </p>
                    </div>
                    <div className='converter_box_bottom_result'>
                        {conversionResult}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnitConverter