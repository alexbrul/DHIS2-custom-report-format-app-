import React from 'react'
import CardHome from '../components/CardHome'
import classes from './Home.module.css'

export default function Home() {
    return (
        <div className={classes.container}>
            <div className={classes.gridcontainer}>
                <CardHome title={"User App"} pButton="Manage Users" description={"Navigate to users app, change and give permissions"} />
                <CardHome title={"Overall Report"} pButton="Manage Users" description={"Something about generating overall reports"} />
                <CardHome title={"Report Format"} pButton="Manage Users" description={"Something about changing report formats"} />
            </div>
        </div>
    )
}
