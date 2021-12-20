import { Button, CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import { datasetReportCustomDynamicQuery } from '../API/API.js'
import React, { useState, useEffect } from 'react'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'

const PrintReport = (props) => {
    const { activePage, dataSets } = props
    const { data, refetch, error, loading } = useDataQuery(datasetReportCustomDynamicQuery, {
        lazy: true,
    })
    const [output, setOutput] = useState("");

    const [counter, setCounter] = useState(0);

    const addCount = () => {
        console.log("adding count")
        setCounter(counter + 1)
    }

    const count = dataSets.length




    const dataSetsArray = []

    useEffect(() => {
        if (data) {
            dataSetsArray.push(data.dataSetReport)
            console.log("inside useEffect triggered by data change")
            addCount()

        }
        console.log("counter: ", counter, " count: ", count)
        if (counter == count && data) {
            dataSetsArray.map(item => {
                console.log("item : ", item)
                document.MyFrame.document.body.innerHTML += item + "-----------------------" + "<br/>" + "<br/>" + "<br/>"
            })
        } else {
            fetchReport(dataSets)
        }
    }, [data])




    const fetchReport = (args) => {

        console.log("Fetching report, count= ", count, " Counter = ", counter)

        if (counter < count) {
            refetch({ ds: dataSets[counter], ou: 'nBLRIqKNNOu', pe: '2020' })

        }

        if (counter == count) {
            console.log("Fetching finished")
            console.log("Dataset library")

        }
    }




    return (
        <div>
            <Button onClick={() => { activePage('Generate') }}> Back to Builder</Button>
            <h1>This is The Report Printer</h1>
            <button onClick={() => {
                { console.log("datasetsbutton: ", dataSets) }
                fetchReport(dataSets)
            }}> Build The Report</button>
            <DatasetPreview>
                {(counter==count) && <p>testalex</p>}
                <p>test</p>
                {(counter==count) && <iframe name="MyFrame" width="100%" height="500px"></iframe>}
                <Button onClick={() =>  setCounter(0)}> setCounter 0</Button>
                <Button onClick={() => console.log(counter)}> log counter</Button>

                </DatasetPreview>


        </div>
    )
}

export default PrintReport