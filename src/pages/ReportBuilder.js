import React, { useState } from 'react'
import { Button, Transfer } from '@dhis2/ui'
import classes from '../styleSheets/reportBuilder.module.css'
import DatasetSelector from '../components/reportBuilder/DatasetSelector'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'

const ReportBuilder = ({ activePage, reportName }) => {
    return (
        <div>
            <div className={classes.topColumn}>
                <Button onClick={() => { activePage('Home') }}> Back Home</Button>
                <p>Report Builder</p>
                <Button>Generate report</Button>

            </div>
            <div className={classes.mainArea}>
                <div className={classes.mainAreaLeft}>
                    <DatasetSelector />
                </div>
                <div className={classes.mainAreaRight}>
                    <DatasetPreview/>
                </div>
            </div>


        </div>

    )
}

export default ReportBuilder;



