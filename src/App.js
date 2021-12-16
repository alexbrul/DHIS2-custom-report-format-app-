import React, { useState } from 'react'
import {useDataQuery } from '@dhis2/app-runtime'
import classes from './App.module.css'
import Home from './pages/Home.js'
import ReportBuilder from './pages/ReportBuilder'

const testQuery = {
    dataSetReport: {
        resource: 'dataSetReport',
        params: ({ ds, pe, ou}) => ({
            ds: ds,
            pe: pe,
            ou: ou,
        })
    }
}

function MyApp() {
    const {data, refetch, error, loading} = useDataQuery(testQuery, {
        lazy: true,
    })

    const loadDataSetReport = () => {
        refetch({ds: 'mZ7EalOemj2', ou: 'nBLRIqKNNOu', pe: '2020' })
        if (loading) return <CircularLoader small />
        if (error) return <p>Oops! Something went wrong.</p>
        if (data) return console.log(data.dataSetReport);
    }

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
            <button onClick={() =>{loadDataSetReport()}}>Fetch Me Some Data</button>
        </div>
    )
}


export default MyApp
