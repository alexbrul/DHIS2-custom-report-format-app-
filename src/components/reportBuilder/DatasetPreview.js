import React from 'react'
import classes from '../../styleSheets/datasetPreview.module.css'

//pass in dataset component as arg
export default function datasetPreview({dataSet, children}) {
    return (
        <div className={classes.main}>
            <p>test</p>

            <main>{children}</main>
            
        </div>
    )
}
