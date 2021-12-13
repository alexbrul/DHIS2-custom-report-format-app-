import React from 'react'
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
    Center,
} from '@dhis2/ui'
import classes from "./CardHome.module.css"


//Card needs implementation of onClick for the buttons. 
export default function CardHome({ title, description = "default", pButton = "Primary action" }) {
    return (
        <div>
            <Box height="200px" width="358px"> {/*needed to sellect size.*/}
                <Card >
                    <div className={classes.main}>
                        <div>
                            <strong className={classes.title}> {title} </strong>
                            <p>{description}</p>
                        </div>
                        <div className={classes.goBottomRight}>
                            <ButtonStrip>
                                <Button primary>{pButton}</Button> {/*add onClick here*/}
                            </ButtonStrip>
                        </div>
                    </div>
                </Card>
            </Box>
        </div>
    )
}
