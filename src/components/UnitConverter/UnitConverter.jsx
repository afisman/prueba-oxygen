import React, { useEffect } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { GoArrowSwitch } from "react-icons/go";



import './UnitConverter.css'
import { useDispatch } from 'react-redux';
import { conversionActions } from '../../redux/slices/conversionSlice';

const UnitConverter = ({ conversionUnitsList, input, setInput, conversionResult, setConversionResult, conversionUnits, setConversionUnits, reverseConversion }) => {



    const dispatch = useDispatch();

    const saveConversion = () => {
        const newSavedConversion = {
            input: `${input} ${conversionUnitsList[conversionUnits].from}`,
            result: `${conversionResult} ${conversionUnitsList[conversionUnits].to}`,
            id: window.self.crypto.randomUUID()
        }
        dispatch(conversionActions.saveConversion(newSavedConversion))
        setInput(0)
    }



    const handleConversion = (e) => {
        let strNum = e.toString();
        let newNumber = e;
        if (strNum[0] === '0' && strNum[1] !== '.' && strNum.length > 1) {
            newNumber = Number(e.toString().substring(1));
            setInput(newNumber);
        }
        const result = newNumber * conversionUnitsList[conversionUnits].conversionRate;
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
                        <select name="distance" value={conversionUnits} onChange={e => setConversionUnits(e.target.value)}>
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
                        <input type="number" value={input} onChange={e => setInput(e.target.value)} />
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
                        <p className='converter_box_bottom_result_number'>
                            {conversionResult}
                        </p>
                        <p className='converter_box_bottom_result_unit'>
                            {conversionUnitsList[conversionUnits].to}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnitConverter