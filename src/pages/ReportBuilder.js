import React, { useState, useEffect } from 'react'
import { Button, Transfer, CircularLoader} from '@dhis2/ui'
import classes from '../styleSheets/reportBuilder.module.css'
import DatasetSelector from '../components/reportBuilder/DatasetSelector'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'
import OrganisationUnitPicker from '../components/reportBuilder/OrganisationUnitPicker'
import { useDataQuery } from '@dhis2/app-runtime'
import {datasetReportCustomDynamicQuery} from '../API/API.js'

                    {/* {<OrganisationUnitPicker 
                        selectedOrgUnits={selectedOrgUnits}
                        setSelectedOrgUnits={setSelectedOrgUnits}
                    />} */}

const ReportBuilder = (props) => {

    const {activePage, format, setDataSets} = props

    //DatasetPicker
    //const [selectedOrgUnits, setSelectedOrgUnits] = useState([]);
    const initiallySelected = [];
    const [selected, setSelected] = useState([])
    const [highlighted, setHighlighted] = useState([])

    const { data, refetch, error, loading } = useDataQuery(datasetReportCustomDynamicQuery, {
        lazy: true,
    })


    const loadDataSetReport = (ds) => {
        refetch({ ds: ds, ou: 'nBLRIqKNNOu', pe: '2020' })
        if (loading) return <CircularLoader small />
        if (error) return <p>Oops! Something went wrong.</p>
        if (data) { document.MyFrame.document.body.innerHTML = data.dataSetReport }

    }
    //fetches when new is requested
    useEffect(() => {
        loadDataSetReport(highlighted) 
    }, [highlighted])

    //updates myframe display after data changes
    useEffect(() => {
        if (data) { document.MyFrame.document.body.innerHTML = data.dataSetReport }
    }, [data])

    return (
        <div>
            <div className={classes.topColumn}>
                <Button onClick={() => { activePage('Home') }}> Back Home</Button>
                <p>{format}</p>
                <Button onClick={() => { 
                    activePage('Print') 
                    setDataSets(selected)}}> Generate Report
                </Button>

            </div>
            <div className={classes.mainArea}>
                <div className={classes.mainAreaLeft}>
                    <DatasetSelector 
                        selected={selected} 
                        setSelected={setSelected} 
                        setHighlighted={setHighlighted}
                        initiallySelected={initiallySelected}/> {/* {should be a copy of options} */}
                </div>
                <div className={classes.mainAreaRight}>
                    <DatasetPreview>
                    {(loading) ? (<CircularLoader small />) : (<iframe name="MyFrame" width="100%" height= "500px"></iframe>)}
                    </DatasetPreview>
                </div>
            </div>
        </div>

    )
}

export default ReportBuilder;



