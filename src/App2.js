import React from 'react'
import { DataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import classes from './App.module.css'
import { useDataQuery } from '@dhis2/app-runtime'
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
                        <h1>
                            {i18n.t('Hello {{name}}', { name: data.me.name })}
                        </h1>
                        <h3>{i18n.t('Welcome to DHIS2!')}</h3>
                        {console.log(data.dataValueSets.dataValues)}
                        {data.dataValueSets.dataValues.map(({ ...args }) => (console.log(args, "arg")))}

                        <DataTable>
                            <TableHead>
                                <DataTableRow>
                                    {console.log("keys datavalues0:", data.dataValueSets.dataValues[0])}
                                    {Object.keys(data.dataValueSets.dataValues[0]).map((k) => {
                                        console.log(k)

                                        return (<DataTableColumnHeader>
                                            {k}
                                        </DataTableColumnHeader>)

                                    })}
                                </DataTableRow>
                            </TableHead>
                            {console.log("datavales igjen", data.dataValueSets.dataValues)}
                            {data.dataValueSets.dataValues.map((item) => {
                                console.log("Item:", item)

                                return (
                                    <DataTableRow>
                                        {console.log("Item:", item)}
                                        {Object.keys(item).map(( i ) => {
                                            console.log("item i:", item.i)
                                            return (
                                                <DataTableCell>{item.i}</DataTableCell>
                                            )
                                        })}
                                    </DataTableRow>
                                )
                            })
                            }
                        </DataTable>

                    </>
                )
            }}
        </DataQuery>
    </div>
)


export default MyApp
