import React, {useState} from 'react';
import { Modal, Button} from '@dhis2/ui';
import AssignmentIcon from '@mui/icons-material/AssignmentOutlined';
import classes from '../styleSheets/promptModal.module.css';

const PromptModal = ({target, click}) =>{
    const [displayState, setDisplayState] = useState({formatOne: 'black', formatTwo: 'black', formatThree: 'black'})
    
    function handleFormat(key){
        if(key === 'f1'){
            setDisplayState({formatOne: '#4db6ac', formatTwo: 'black', formatThree: 'black'})
        } else if(key === 'f2'){
            setDisplayState({formatOne: 'black', formatTwo: '#4db6ac', formatThree: 'black'})
        } else{
            setDisplayState({formatOne: 'black', formatTwo: 'black', formatThree: '#4db6ac'})
        }
        console.log(displayState);
    }

    return(
        <Modal className={classes.modal}>
            <p className={classes.title}> Select Format to {target} </p>
            <div className={classes.iconBox} style={{color: displayState.formatOne}}>
                <div className={classes.reportSelect}>
                    <AssignmentIcon sx={{ fontSize: 60, margin: 2}} 
                        onClick={()=>{handleFormat('f1')}} 
                        className={classes.assignmentIcon}>
                    </AssignmentIcon>
                    <p className={classes.iconText}>Format 1</p>
                </div>
                <div className={classes.reportSelect} style={{color: displayState.formatTwo}}>
                    <AssignmentIcon sx={{ fontSize: 60, margin: 2}} 
                        onClick={()=>{handleFormat('f2')}} 
                        className={classes.assignmentIcon}>
                    </AssignmentIcon>
                    <p className={classes.iconText}>Format 2</p>
                </div>
                <div className={classes.reportSelect} style={{color: displayState.formatThree}}>
                    <AssignmentIcon sx={{ fontSize: 60, margin: 2}} 
                        onClick={()=>{handleFormat('f3')}} 
                        className={classes.assignmentIcon}>
                    </AssignmentIcon>
                    <p className={classes.iconText}>Format 3</p>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button onClick ={()=>{
                    click(false)
                }}>Close</Button>

                <Button primary onClick ={()=>{
                    click('Report Builder')
                }}>Create</Button>
            </div>
        </Modal>
    )
}

export default PromptModal;