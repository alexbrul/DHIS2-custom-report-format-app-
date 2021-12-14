import React, {useState} from 'react'
import CardHome from '../components/CardHome'
import PromptModal from '../components/PromptModal'
import classes from '../styleSheets/home.module.css'

export default function Home({activePage}) {
    const [modal, setModal] = useState(false)
    //const [page, setPage] = useState('Home')

    function handleClick(e){
        if(e === 'Report Builder'){
            activePage(e)
        }
        setModal(e)
    }

    function userNav(){
        window.open(URL, 'http://localhost:3000/');
    }

    return (
        <div className={classes.container}>
            <div className={classes.gridcontainer}>
                <CardHome title={"User app"} pButton="Manage" description={"Navigate to users app, change and give permissions"} click = {userNav}/>
                <CardHome title={"Generate Report"} pButton="Build" description={"Build a new report using a configured format"} click = {handleClick}/>
                <CardHome title={"Edit Report Format"} pButton="Edit" description={"Edit an existing report format"} click = {handleClick}/>
            </div>
            {modal && <PromptModal target = {modal} click = {handleClick}/>}
        </div>
    )
}
