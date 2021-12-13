import React, { useState } from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { useDataQuery } from '@dhis2/app-runtime'
import CardHome from './components/CardHome.js'
import Home from './pages/Home.js'

const dataQuery = {
    me: {
        resource: 'me',
    },
    dataSets: {
        resource: 'dataSets/aLpVgfXiz0f',
        params: {
            fields: [
                'name',
                'id',
                'dataSetElements[dataElement[id, displayName]',
            ],
        },
    },
    dataValueSets: {
        resource: 'dataValueSets',
        params: {
            orgUnit: 'KiheEgvUZ0i',
            dataSet: 'aLpVgfXiz0f',
            period: '2020',
        },
    },
}



function MyApp() {
    //Always start with homepage. 
    const [activePage, setActivePage] = useState("Home")

    function activePageHandler(page){
        setActivePage(page);
    }

    return (
        <div className={classes.container}>
            <DataQuery query={dataQuery}>
                {({ error, loading, data }) => {
                    if (error) return <span>ERROR</span>
                    if (loading) return <span>...</span>
                    return (
                        <>
                        {activePage === 'Home' && <Home ActivePageHandler={activePageHandler}/>}
                        </>
                    )
                }}
            </DataQuery>
        </div>
    )
}


export default MyApp
