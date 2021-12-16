import React from 'react';
import {
    DataTable,
    TableHead,
    TableBody,
    TableFoot,
    DataTableRow,
    DataTableCell,
    DataTableColumnHeader,
} from '@dhis2/ui'

const TableBuilder = (props) =>{
    return (
        <DataTable>
            <TableHead>
                <DataTableRow>
                    <DataTableColumnHeader>
                        First name
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Last name
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Incident date
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        Last updated
                    </DataTableColumnHeader>
                </DataTableRow>
            </TableHead>
            <TableBody>
                <DataTableRow>
                    <DataTableCell>
                    </DataTableCell>
                </DataTableRow>
            </TableBody>
        </DataTable>
    )
}

export default TableBuilder;