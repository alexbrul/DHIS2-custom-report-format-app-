import React, { useState } from 'react'
import {useDataQuery} from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui'
import classes from './App.module.css'
import Home from './pages/Home.js'
import ReportBuilder from './pages/ReportBuilder'

const testQuery = {
    dataSetReport: {
        resource: 'dataSetReport/custom',
        params: ({ ds, pe, ou}) => ({
            ds: ds,
            pe: pe,
            ou: ou,
            format: 'html'
        })
    }
}

function MyApp() {


    //Always start with homepage. 
    const [activePage, setActivePage] = useState("Home")
    const [format, setFormat] = useState()

    function activePageHandler(page, format){
        setActivePage(page);
        if(format === 'f1'){
            setFormat('Format 1')
        }
    }

    return (
        <div className={classes.container}>
            {activePage === 'Home' && <Home activePage={activePageHandler}/>}
            {activePage === 'Edit' && <Home activePage={activePageHandler}/>}
            {activePage === 'Generate' && <ReportBuilder activePage={activePageHandler} format={format}/>}
        </div>
    )
}


export default MyApp
