import React from 'react'
import CardHome from '../components/CardHome'
import classes from './Home.module.css'

export default function Home() {
    return (
        <div className={classes.container}>
            <div className={classes.gridcontainer}>
                <CardHome title={"User app"} pButton="Manage Users" description={"Navigate to users app, change and give permissions"} />
                <CardHome title={"User app"} pButton="Manage Users" description={"Navigate to users app, change and give permissions"} />
                <CardHome title={"User app"} pButton="Manage Users" description={"Navigate to users app, change and give permissions"} />
            </div>
        </div>
    )
}
