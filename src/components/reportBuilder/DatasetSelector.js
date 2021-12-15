import React, { useState, useEffect } from 'react'
import { Button, Transfer, TransferOption } from '@dhis2/ui'

export default function DatasetSelector({ selected, setSelected, optionstmp }) {

    const [highL, setHighL] = useState([]);



    const onChange = (payload) => {
        setSelected(payload.selected); 
    }

    //has to be passed down later. 
    const [options, setOptions] = useState([
        {
            label: 'ANC 1st visit',
            value: 'anc_1st_visit'
        },
        {
            label: 'ANC 2nd visit',
            value: 'anc_2nd_visit'
        },
        {
            label: 'ANC 3rd visit',
            value: 'anc_3rd_visit'
        },
        {
            label: 'ANC 4th or more visits',
            value: 'anc_4th_or_more_visits'
        },

    ])

    const betterOption = (props) => {
        const { label, value, onClick, highlighted, selected } = props
        // do something if this highlighted

        const customOnClick = (...args) => {
            if (!highlighted) {
                setHighL([label, value])
            }else{
                setHighL([])
            }
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
                height="70vh"
                options={options}
                selected={selected}
            />
            <p>test {highL}</p>


        </div>
    )
}
