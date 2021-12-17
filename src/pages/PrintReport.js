import { Button } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import {datasetReportCustomDynamicQuery} from '../API/API.js'
import React, { useState, useEffect } from 'react'

const PrintReport = ({activePage, dataSets}) =>{
    const { data, refetch, error, loading } = useDataQuery(datasetReportCustomDynamicQuery, {
        lazy: true,
    })

    const dataSetsArray = []

    const buildReport = () => {
        dataSets.map(item =>{
            console.log(item);
            refetch({ ds: item, ou: 'nBLRIqKNNOu', pe: '2020' })
            if(data){
                dataSetsArray.push(data.dataSetReport)
            }
        })
        console.log(dataSetsArray.length);
        dataSetsArray.map(item =>{
            document.MyFrame.document.body.innerHTML += item + "-----------------------" + "<br/>" + "<br/>" + "<br/>"
        })
    }
    
    return (
        <div>
            <Button onClick={() => {activePage('Generate')}}> Back to Builder</Button>
            <h1>This is The Report Printer</h1>
            <button onClick={() => {
                buildReport()
            }}> Build The Report</button>
            <iframe name="MyFrame" width="100%" height= "500px"></iframe>
        </div>
    )
}

export default PrintReport