import React from 'react';


import './SavedConversionList.css'
import SavedConversion from './SavedConversion/SavedConversion';

const SavedConversionsList = ({ savedConversionsArr, handleDeleteConversion }) => {
    return (
        <div className='saved'>
            <div className='saved_box'>
                <p>
                    saved
                </p>
                <div className='saved_box_list'>
                    {savedConversionsArr.map((el, i) => (
                        <SavedConversion key={i + 1} input={el.input} result={el.result} id={el.id} handleDeleteConversion={handleDeleteConversion} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SavedConversionsList