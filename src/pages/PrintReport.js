import { Button, CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import { datasetReportCustomDynamicQuery } from '../API/API.js'
import React, { useState, useEffect } from 'react'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'
import classes from '../styleSheets/reportBuilder.module.css'
import PrintPage from '../components/printing/PrintPage.js'

const PrintReport = (props) => {
    const { activePage, dataSets } = props
    const { data, refetch, error, loading } = useDataQuery(datasetReportCustomDynamicQuery, {
        lazy: false,
    })
    const [dataSetsArray, setDataSetsArray] = useState([])
    const [output, setOutput] = useState("");

    const [counter, setCounter] = useState(0);

    const addCount = () => {
        setCounter(counter + 1)
    }

    const count = dataSets.length


    useEffect((props) => {
        if (data && (count>counter)) {
            addCount()
            setDataSetsArray([...dataSetsArray, data.dataSetReport])
        }

    }, [data])

    useEffect((props) => {
        fetchReport()

    }, [dataSetsArray])





    const fetchReport = (args) => {
        if (counter < count) {
            refetch({ ds: dataSets[counter], ou: 'nBLRIqKNNOu', pe: '2020' })
        }
    }




    return (
        <div>
            <div className={classes.topColumn}>
                <Button onClick={() => { activePage('Generate') }}> Back to Builder</Button>
                <p>Report Printer</p>
                <Button onClick={() => { activePage('Generate') }}> Print Report</Button>
            </div>
            {(counter!=count) && <CircularLoader/>} 
            {(counter==count) && <PrintPage htmlArray={dataSetsArray}/>}
            
        </div>
    )
}

export default PrintReport