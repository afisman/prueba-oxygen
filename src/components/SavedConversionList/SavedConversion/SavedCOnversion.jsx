import React from 'react';
import { GoArrowRight, GoX } from "react-icons/go";

import './SavedConversion.css'


const SavedConversion = ({ input, result, id, handleDeleteConversion }) => {
    return (
        <div className='savedConversion'>
            <div className='savedConversion_box'>
                <p>
                    {input}
                    {' '}
                    <GoArrowRight />
                    {' '}
                    {result}
                </p>

                <p>
                    <GoX
                        className='savedConversion_box_icon_close'
                        onClick={() => handleDeleteConversion(id)}
                    />
                </p>

            </div>

        </div>
    )
}

export default SavedConversion