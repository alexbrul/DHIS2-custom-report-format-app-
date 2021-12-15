import React, { useState } from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import classes from './App.module.css'
import Home from './pages/Home.js'
import ReportBuilder from './pages/ReportBuilder'

const dataQuery = {
    me: {
        resource: 'me',
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
            <DataQuery query={dataQuery}>
                {({ error, loading, data }) => {
                    if (error) return <span>ERROR</span>
                    if (loading) return <span>...</span>
                    return (
                        <>
                        {activePage === 'Home' && <Home activePage={activePageHandler}/>}
                        {activePage === 'Edit' && <Home activePage={activePageHandler}/>}
                        {activePage === 'Generate' && <ReportBuilder activePage={activePageHandler} format={format}/>}
                        </>
                    )
                }}
            </DataQuery>
        </div>
    )
}


export default MyApp
