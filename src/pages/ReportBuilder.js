import {Button} from '@dhis2/ui'

const ReportBuilder = ({activePage}) =>{
    return (
        <div>
            <p>Report Builder Home</p>
            <Button onClick ={()=>{
                activePage('Home')
            }}> Back Home</Button>
        </div>
        
    )
}

export default ReportBuilder;