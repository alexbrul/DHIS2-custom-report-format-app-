import React, {useState} from 'react'
import CardHome from '../components/CardHome'
import PromptModal from '../components/PromptModal'
import classes from '../styleSheets/home.module.css'

export default function Home() {
    const [modal, setModal] = useState(false)
    function handleClick(e){
        setModal(e)
    }
    return (
        <div className={classes.container}>
            <div className={classes.gridcontainer}>
                <CardHome title={"User app"} pButton="Manage" description={"Navigate to users app, change and give permissions"} modalFunction = {handleClick}/>
                <CardHome title={"Generate Report"} pButton="Build" description={"Build a new report using a configured format"} modalFunction = {handleClick}/>
                <CardHome title={"Edit Report Format"} pButton="Edit" description={"Edit an existing report format"} modalFunction = {handleClick}/>
            </div>
            {console.log(modal)}
        </div>
    )
}
