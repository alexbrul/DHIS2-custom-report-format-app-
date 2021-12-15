import React, { useState } from 'react'
import { Button, Transfer } from '@dhis2/ui'
import classes from '../styleSheets/reportBuilder.module.css'
import DatasetSelector from '../components/reportBuilder/DatasetSelector'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'

const ReportBuilder = ({ activePage, reportName }) => {

    //DatasetPicker
    const initiallySelected = [];
    const [selected, setSelected] = useState(initiallySelected)

    return (
        <div>
            <div className={classes.topColumn}>
                <Button onClick={() => { activePage('Home') }}> Back Home</Button>
                    <p>Report Builder</p>
                <Button>Generate report</Button>

            </div>
            <div className={classes.mainArea}>
                <div className={classes.mainAreaLeft}>
                    <DatasetSelector selected={selected} setSelected={setSelected} 
                    initiallySelected={initiallySelected} /> {/* {should be a copy of options} */}
                </div>
                <div className={classes.mainAreaRight}>
                    <DatasetPreview>
                        <h1>barn av regnbuen</h1>
                        </DatasetPreview>
                </div>
            </div>


        </div>

    )
}

export default ReportBuilder;



