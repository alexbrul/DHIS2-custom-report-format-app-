import React, { useState } from 'react'
import {useDataQuery} from '@dhis2/app-runtime'
import { CircularLoader } from '@dhis2/ui'
import classes from './App.module.css'
import Home from './pages/Home.js'
import ReportBuilder from './pages/ReportBuilder'
import PrintReport from './pages/PrintReport'

function MyApp() {


    //Always start with homepage. 
    const [activePage, setActivePage] = useState("Home")
    const [format, setFormat] = useState("Format One")
    const [dataSets, setDataSets] = useState([])

    function activePageHandler(page){
        setActivePage(page);
    }

    return (
        <div className={classes.container}>
            {activePage === 'Home' && <Home activePage={activePageHandler}/>}
            {activePage === 'Edit' && <Home activePage={activePageHandler}/>}
            {activePage === 'Generate' && <ReportBuilder activePage={activePageHandler} format={format} setDataSets={setDataSets}/>}
            {activePage === 'Print' && <PrintReport activePage={activePageHandler} dataSets={dataSets}/>}
        </div>
    )
}


export default MyApp
