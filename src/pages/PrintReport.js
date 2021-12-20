import { Button, CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import { datasetReportCustomDynamicQuery } from '../API/API.js'
import React, { useState, useEffect } from 'react'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'

const PrintReport = (props) => {
    const { activePage, dataSets } = props
    const { data, refetch, error, loading } = useDataQuery(datasetReportCustomDynamicQuery, {
        lazy: false,
    })
    const [dataSetsArray, setDataSetsArray] = useState([])
    const [output, setOutput] = useState("");

    const [counter, setCounter] = useState(0);

    const addCount = () => {
        console.log("adding count")
        setCounter(counter + 1)
    }

    const count = dataSets.length


    useEffect((props) => {
        console.log("inside useEffect triggered by data change")
        if (data && (count>counter)) {
            addCount()
            console.log("if test triggered")
            console.log("data: ", data)
            setDataSetsArray([...dataSetsArray, data.dataSetReport])
            console.log("datasetsarray inside if: ", dataSetsArray)
            console.log("Data inside useffect: ", data.dataSetReport)

        }

    }, [data])

    useEffect((props) => {
        fetchReport()

    }, [dataSetsArray])





    const fetchReport = (args) => {

        console.log("Fetching report, count= ", count, " Counter = ", counter)
        if (counter < count) {
            refetch({ ds: dataSets[counter], ou: 'nBLRIqKNNOu', pe: '2020' })
        }

        if (counter == count) {
            console.log("Fetching finished")
            console.log("datasetsarray finished", dataSetsArray)
            console.log("Dataset library")
            if ((counter >= count)) {
                console.log("dataset array", dataSetsArray)
                dataSetsArray.map(item => {
                    console.log("item : ", item)
                    document.MyFrame.document.body.innerHTML += item + "-----------------------" + "<br/>" + "<br/>" + "<br/>"
                })
            }

        }
    }




    return (
        <div>
            <Button onClick={() => { activePage('Generate') }}> Back to Builder</Button>
            <h1>This is The Report Printer</h1>
            <button onClick={() => 
                    fetchReport()
            }> Build The Report</button>
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