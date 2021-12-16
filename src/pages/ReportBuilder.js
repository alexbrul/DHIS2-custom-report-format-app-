import React, { useState, useEffect } from 'react'
import { Button, Transfer } from '@dhis2/ui'
import classes from '../styleSheets/reportBuilder.module.css'
import DatasetSelector from '../components/reportBuilder/DatasetSelector'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'
import OrganisationUnitPicker from '../components/reportBuilder/OrganisationUnitPicker'
import { useDataQuery } from '@dhis2/app-runtime'

const ReportBuilder = ({ activePage, format }) => {

    //DatasetPicker
    const initiallySelected = [];
    const [selected, setSelected] = useState(["empty"])
    const [selectedOrgUnits, setSelectedOrgUnits] = useState([]);
    const [highLighted, setHighlighted] = useState([])



    const testQuery = {
        dataSetReport: {
            resource: 'dataSetReport/custom',
            params: ({ ds, pe, ou }) => ({
                ds: ds,
                pe: pe,
                ou: ou,
                format: 'html'
            })
        }
    }

    const { data, refetch, error, loading } = useDataQuery(testQuery, {
        lazy: true,
    })


    const loadDataSetReport = () => {
        refetch({ ds: 'mZ7EalOemj2', ou: 'nBLRIqKNNOu', pe: '2020' })
        if (loading) return <CircularLoader small />
        if (error) return <p>Oops! Something went wrong.</p>
        if (data) { document.MyFrame.document.body.innerHTML = data.dataSetReport }
    }
    useEffect(() => {
        console.log("Useeefffect")
        loadDataSetReport()
        
    }, [highLighted])

    return (
        <div>
            <div className={classes.topColumn}>
                <Button onClick={() => { activePage('Home') }}> Back Home</Button>
                <p>{format}</p>
                <Button>Generate report</Button>

            </div>
            <div className={classes.mainArea}>
                <div className={classes.mainAreaLeft}>
                    {console.log("logging selected: ", selected)}
                    <DatasetSelector selected={selected} setSelected={setSelected} setHighlighted={setHighlighted}
                        initiallySelected={initiallySelected} /> {/* {should be a copy of options} */}
                    {/* {<OrganisationUnitPicker 
                        selectedOrgUnits={selectedOrgUnits}
                        setSelectedOrgUnits={setSelectedOrgUnits}
                    />} */}
                </div>
                <div className={classes.mainAreaRight}>
                    <DatasetPreview>
                        <iframe name="MyFrame"></iframe>
                        <p>testhei</p>
                    </DatasetPreview>
                </div>
            </div>


        </div>

    )
}

export default ReportBuilder;



