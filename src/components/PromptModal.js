import { Modal, Button} from '@dhis2/ui';
import AssignmentIcon from '@mui/icons-material/AssignmentOutlined';
import classes from '../styleSheets/promptModal.modules.css';

const PromptModal = ({target, click}) =>{
    return(
        <Modal className={classes.modal}>
            Hello this is a modal containing info on {target}
            <br/> <br/> <br/>
            <div className={classes.reportIcon}>
                <AssignmentIcon sx={{ fontSize: 50 }} ></AssignmentIcon>
                <AssignmentIcon sx={{ fontSize: 60 }} ></AssignmentIcon>
                <AssignmentIcon sx={{ fontSize: 60 }} ></AssignmentIcon>
                <AssignmentIcon sx={{ fontSize: 60 }} ></AssignmentIcon>
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