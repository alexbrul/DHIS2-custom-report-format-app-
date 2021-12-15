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

const TableBuilder = () =>{
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
                        Onyekachukwu
                    </DataTableCell>
                    <DataTableCell>
                        Kariuki
                    </DataTableCell>
                    <DataTableCell>
                        02/06/2007
                    </DataTableCell>
                    <DataTableCell>
                        05/25/1972
                    </DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell>
                        Kwasi
                    </DataTableCell>
                    <DataTableCell>
                        Okafor
                    </DataTableCell>
                    <DataTableCell>
                        08/11/2010
                    </DataTableCell>
                    <DataTableCell>
                        02/26/1991
                    </DataTableCell>
                </DataTableRow>
                <DataTableRow>
                    <DataTableCell>
                        Siyabonga
                    </DataTableCell>
                    <DataTableCell>
                        Abiodun
                    </DataTableCell>
                    <DataTableCell>
                        07/21/1981
                    </DataTableCell>
                    <DataTableCell>
                        02/06/2007
                    </DataTableCell>
                </DataTableRow>
            </TableBody>
            <TableFoot>
                <DataTableRow>
                    <DataTableCell colSpan="4">
                        Footer content
                    </DataTableCell>
                </DataTableRow>
            </TableFoot>
        </DataTable>
    )
}

export default TableBuilder;