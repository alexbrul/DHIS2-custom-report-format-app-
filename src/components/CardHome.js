import React, {useState} from 'react'
import {
    Button,
    ButtonStrip,
    Box,
    Card,
} from '@dhis2/ui'
import classes from "../styleSheets/cardHome.module.css"


//Card needs implementation of onClick for the buttons. 
export default function CardHome({ title, description, pButton, selectModal}) {
    return (
        <div>
            <Box height="200px" width="358px"> {/*needed to select size.*/}
                <Card >
                    <div className={classes.main}>
                        <div>
                            <p className={classes.title}> {title} </p>
                            <p className={classes.paragraphText}>{description}</p>
                        </div>
                        <div className={classes.goBottomRight}>
                            <ButtonStrip>
                                <button className={classes.button} onClick = {()=>{
                                    {selectModal(pButton)}}}> {pButton}
                                </button>
                            </ButtonStrip>
                        </div>
                    </div>
                </Card>
            </Box>
        </div>
    )
}
