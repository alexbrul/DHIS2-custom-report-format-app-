import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { useDataQuery } from '@dhis2/app-runtime'
import CardHome from './components/CardHome.js'
import {
    Table,
    DataTable,
    DataTableRow,
    TableBody,
    TableCell,
    TableCellHead,
    TableFoot,
    TableHead,
    TableRow,
    TableRowHead,
    DataTableColumnHeader,
    DataTableCell,
    Modal,
    ModalTitle,
    Button,
    ButtonStrip,
    ModalActions,
    ModalContent,
    Box,
    Card,
} from '@dhis2/ui'






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

const MyApp = () => (
    <div className={classes.container}>
        <DataQuery query={dataQuery}>
            {({ error, loading, data }) => {
                if (error) return <span>ERROR</span>
                if (loading) return <span>...</span>
                return (
                   

                    <>
                     <br/>
                    <br/>
                        <CardHome title={"User app"} pButton="Manage Users" description={"Navigate to users app, change and give permissions"}/>

                    </>
                )
            }}
        </DataQuery>
    </div>
)


export default MyApp
