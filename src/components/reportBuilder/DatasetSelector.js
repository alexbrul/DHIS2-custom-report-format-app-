import React, { useState, useEffect, componentDidMount } from 'react'
import { Button, Transfer, TransferOption } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'


const DatasetSelector = (props) =>{

    const {selected, setSelected, optionstmp, setHighlighted, options} = props

    const HEIGHT_SELECTOR = "40vh"


    const onChange = (payload) => {
        setSelected(payload.selected); 
    }

    //has to be passed down later. 
    let initially = options.map(item => item.label)



    const betterOption = (props) => {
        const {value, onClick} = props
        // do something if this highlighted

        const customOnClick = (...args) => {
            setHighlighted(value)
            onClick(...args)
            
        }
        return <TransferOption {...props} onClick={customOnClick} />
    }



    return (
        <div>
            <Transfer
                renderOption={betterOption}
                filterable
                enableOrderChange
                leftHeader={<h5>Available Datasets</h5>}
                rightHeader={<h5>Selected Datasets</h5>}
                onChange={onChange}
                height={HEIGHT_SELECTOR}
                options={options}
                selected={selected}
            />
        </div>
    )
}

export default DatasetSelector
