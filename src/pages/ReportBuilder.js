import React, { useState, useEffect } from 'react'
import { Button, Transfer, CircularLoader} from '@dhis2/ui'
import classes from '../styleSheets/reportBuilder.module.css'
import DatasetSelector from '../components/reportBuilder/DatasetSelector'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'
import OrganisationUnitPicker from '../components/reportBuilder/OrganisationUnitPicker'
import { useDataQuery } from '@dhis2/app-runtime'

const ReportBuilder = ({ activePage, format }) => {

    //DatasetPicker
    //const [selectedOrgUnits, setSelectedOrgUnits] = useState([]);
    const initiallySelected = [];
    const [selected, setSelected] = useState(["empty"])
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


    const loadDataSetReport = (ds) => {
        refetch({ ds: ds, ou: 'nBLRIqKNNOu', pe: '2020' })
        if (loading) return <CircularLoader small />
        if (error) return <p>Oops! Something went wrong.</p>
        if (data) { document.MyFrame.document.body.innerHTML = data.dataSetReport }
    }
    useEffect(() => {
        loadDataSetReport(highLighted) 
        console.log(highLighted);
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
                    <DatasetSelector selected={selected} setSelected={setSelected} setHighlighted={setHighlighted}
                        initiallySelected={initiallySelected} /> {/* {should be a copy of options} */}
                    {/* {<OrganisationUnitPicker 
                        selectedOrgUnits={selectedOrgUnits}
                        setSelectedOrgUnits={setSelectedOrgUnits}
                    />} */}
                </div>
                <div className={classes.mainAreaRight}>
                    <DatasetPreview>
                        <iframe name="MyFrame" width="100%" height= "500px"></iframe>
                    </DatasetPreview>
                </div>
            </div>


        </div>

    )
}

export default ReportBuilder;



