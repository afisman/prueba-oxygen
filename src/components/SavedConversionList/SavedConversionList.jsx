import React from 'react';


import './SavedConversionList.css'

import { useSelector, useDispatch } from 'react-redux';
import { conversionActions } from '../../redux/slices/conversionSlice';

import SavedConversion from './SavedConversion/SavedConversion';

const SavedConversionsList = () => {

    const dispatch = useDispatch();

    const selector = useSelector((state) => state.conversionSaver);

    const handleDeletion = (id) => dispatch(conversionActions.deleteConversion(id))



    return (
        <div className='saved'>
            <div className='saved_box'>
                <p>
                    saved
                </p>
                <div className='saved_box_list'>
                    {selector.savedConversions && selector.savedConversions.map((el, i) => (
                        <SavedConversion
                            key={i + 1}
                            input={el.input}
                            result={el.result}
                            id={el.id}
                            handleDeleteConversion={handleDeletion}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SavedConversionsList