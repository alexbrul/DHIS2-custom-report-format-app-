import { Button } from '@dhis2/ui'

const PrintReport = ({activePage, datasets}) =>{
    return (
        <div>
            <Button onClick={() => {activePage('Generate')}}> Back to Builder</Button>
            <h1>This is The Report Printer</h1>
            {datasets}
        </div>
    )
}

export default PrintReport