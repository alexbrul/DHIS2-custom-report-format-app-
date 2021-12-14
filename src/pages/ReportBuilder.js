import React, { useState } from 'react'
import { Button, Transfer } from '@dhis2/ui'
import classes from '../styleSheets/reportBuilder.module.css'

const ReportBuilder = ({ activePage }) => {
    return (
        <div>
            <div className={classes.topColumn}>
                <Button onClick={() => { activePage('Home') }}> Back Home</Button>
                <p>Report Builder</p>
                <Button>Generate report</Button>

            </div>
            <div className={classes.mainArea}>
                <div className={classes.mainAreaLeft}>
                <Transfer
                    filterable
                    enableOrderChange
                    leftHeader={<h5>Available Datasets</h5>}
                    rightHeader={<h5>Selected Datasets</h5>}
                    // onChange={onChange}
                    options={[
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

                    ]}
                    selected={[]}
                />
                </div>
                <div className={classes.mainAreaRight}>
<h1>test</h1>
                </div>
            </div>


        </div>

    )
}

export default ReportBuilder;



