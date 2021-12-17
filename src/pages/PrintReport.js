import { Button, CircularLoader } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import {datasetReportCustomDynamicQuery} from '../API/API.js'
import React, { useState, useEffect } from 'react'

const PrintReport = (props) =>{
    const {activePage, dataSets} = props
    const { data, refetch, error, loading } = useDataQuery(datasetReportCustomDynamicQuery, {
        lazy: true,
    })
    const [counter, setCounter] = useState(0);

    const addCount = () => {
        setCounter(count+1)
    }

    const count = dataSets.length
    console.log("count datasets: ", count)
    console.log("datasets start:", dataSets)
    


    const dataSetsArray = []

    useEffect(() => {
        if (data) { 
            dataSetsArray.push(data.dataSetReport)
            fetchReport(dataSets)
            addCount()
            console.log("counter: ", counter, )
            
        }
    }, [data])

    useEffect(() => {
        console.log("adding report")
        if(counter==count){
            document.MyFrame.document.body.innerHTML = data.dataSetReport;
        }
    }, [counter])


    const fetchReport = (args) => {
        
       console.log("datasets print:", dataSets)


        console.log(dataSetsArray.length);

        if(counter<count){
            refetch({ ds: dataSets[counter], ou: 'nBLRIqKNNOu', pe: '2020' })

        }
        
        if(counter==count){
            console.log("Fetching finished")
            dataSetsArray.map(item =>{
                document.MyFrame.document.body.innerHTML += item + "-----------------------" + "<br/>" + "<br/>" + "<br/>"
            })
        }
    }



    
    return (
        <div>
            <Button onClick={() => {activePage('Generate')}}> Back to Builder</Button>
            <h1>This is The Report Printer</h1>
            <button onClick={() => {
                {console.log("datasetsbutton: ", dataSets)}
                fetchReport(dataSets)
            }}> Build The Report</button>
            <iframe name="MyFrame" width="100%" height= "500px"></iframe>)

        </div>
    )
}

export default PrintReport