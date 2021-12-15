import React from 'react'
import classes from '../../styleSheets/datasetPreview.module.css'
import TableBuilder from './TableBuilder'

//pass in dataset component as arg
export default function datasetPreview({dataSet, children}) {
    return (
        <div className={classes.main}>

            <main>
                <TableBuilder/>
            </main>
            
        </div>
    )
}
