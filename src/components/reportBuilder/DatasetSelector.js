import React, { useState } from 'react'
import { Button, Transfer, TransferOption } from '@dhis2/ui'

export default function DatasetSelector({}) {

    const initiallySelected = [];
    const [selected, setSelected] = useState(initiallySelected)
    const onChange = (payload) => setSelected(payload.selected)


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


    return (
        <div>

            <Transfer
                filterable
                enableOrderChange
                leftHeader={<h5>Available Datasets</h5>}
                rightHeader={<h5>Selected Datasets</h5>}
                onChange={onChange}
                height="70vh"
                options={options}
                selected={selected}
            />

        </div>
    )
}
