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

    let finalReport = ""

    const fetchReport = (dataSetID) => {
        refetch({ ds: dataSetID, ou: 'nBLRIqKNNOu', pe: '2020' })
    }

    return (
        <div>
            <Button onClick={() => { activePage('Generate') }}> Back to Builder</Button>
            <h1>This is The Report Printer</h1>
            <button onClick={() => {
                fetchData()
            }}> Fetch The Report</button>
            <DatasetPreview>
                {(loading) ? (<CircularLoader small />) : (<iframe name="MyFrame" width="100%" height= "500px"></iframe>)}
            </DatasetPreview>
        </div>
    )
}

export default PrintReport