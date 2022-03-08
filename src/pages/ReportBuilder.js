import React, { useState, useEffect } from 'react'
import { Button, Transfer, CircularLoader} from '@dhis2/ui'
import classes from '../styleSheets/reportBuilder.module.css'
import DatasetSelector from '../components/reportBuilder/DatasetSelector'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'
import OrganisationUnitPicker from '../components/reportBuilder/OrganisationUnitPicker'
import { useDataQuery } from '@dhis2/app-runtime'
import {datasetReportCustomDynamicQuery} from '../API/API.js'

   {/* Should rewrite everything and use async/await. This is spagetti and over engineered */}


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

    const [options, setOptions] = useState([
        {
            value: 'XesKc0UNEKj',
            label: '001 Outpatient Consultation (OPD)'
        },
        {    
            value: 'mZ7EalOemj2',
            label: '002 Malaria dataset'
        },
        {
            value: 'TsmvMflRNmk',
            label: '003 Hospitalization'
        },
        {
            value: 'JhTgs34Pl1b',
            label: '004 Mental Health and NCDs'
        },
        {    
            value: 'aPPHD1VGcpr',
            label: '005 Gender Based Violence and Abortions'
        },
        {    
            value: 'iynGsJrWbuY',
            label: '006 Surgery Anasthesia & Rehab & Physiotherapy'
        }, 
        {   
            value: 'jq0USnQckxw',
            label: '007 Obstetrical Complications and Deliveries'
        },
        {
            value: 'KnGuR0QeJmQ',
            label: '008 Postnatal , KMC and Neonatal'
        },
        {
            value: 'sqWWN3A2z1p',
            label: '009 Nutrition and Family Planning'
        },
        {
            value: 'd3r98cmbKi4',
            label: '010 Laboratory'
        },
        {
            value: 'XArHJTZMZxq',
            label: '011 Medical Imagery'
        },
        {
            value: 'HIVLAKADGeB',
            label: '012 Ambulance'
        },
        {
            value: 'X1XOMlrgsFg',
            label: '013 DH Stock of tracer drugs'
        },
        {
            value: 'UerYwP2Xbme',
            label: '014 Referral Cervical Cancer Screening and Breast Cancer Early Detection'
        },
        {
            value: 'Eb94c0LrXWN',
            label: '014 Staffing Information'
        },
        {
            value: 'oKI4cf9hz2E',
            label: '015 DH_Cervical cancer screening and breast cancer early detection'
        }

    ])

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
                        options={options} 
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



