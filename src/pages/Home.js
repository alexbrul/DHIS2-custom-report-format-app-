import React, {useState} from 'react'
import CardHome from '../components/CardHome'
import PromptModal from '../components/PromptModal'
import classes from '../styleSheets/home.module.css'
import DatasetPreview from '../components/reportBuilder/DatasetPreview'

export default function Home({activePage}) {
    const [modal, setModal] = useState(false)

    function handleClick(page, format){
        if(page === 'Manage'){
            window.open(URL, 'http://localhost:3000/');
        } else if (format){
            activePage(page, format)
        } else {
            setModal(page)
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.gridcontainer}>
                <CardHome title={"User app"} pButton="Manage" description={"Navigate to users app, change and give permissions"} selectModal= {handleClick}/>
                <CardHome title={"Generate Report"} pButton="Generate" description={"Build a new report using a configured format"} selectModal= {handleClick}/>
                <CardHome title={"Edit Report Format"} pButton="Edit" description={"Edit an existing report format"} selectModal= {handleClick}/>
            </div>
            {modal && <PromptModal target={modal} openPage={handleClick}/>}
        </div>
    )
}
