import React, {useState} from 'react'
import CardHome from '../components/CardHome'
import PromptModal from '../components/PromptModal'
import classes from '../styleSheets/home.module.css'
import {Modal} from '@dhis2/ui'

export default function Home() {
    const [modal, setModal] = useState(false)
    
    function handleClick(e){
        setModal(e)
    }
    return (
        <div className={classes.container}>
            <div className={classes.gridcontainer}>
                <CardHome title={"User app"} pButton="Manage" description={"Navigate to users app, change and give permissions"} click = {handleClick}/>
                <CardHome title={"Generate Report"} pButton="Build" description={"Build a new report using a configured format"} click = {handleClick}/>
                <CardHome title={"Edit Report Format"} pButton="Edit" description={"Edit an existing report format"} click = {handleClick}/>
            </div>
            {modal && <PromptModal target = {modal} click = {handleClick}/>}
        </div>
    )
}
