import { Modal, Button} from '@dhis2/ui';
import classes from '../styleSheets/modal.modules.css';

const PromptModal = ({target, click}) =>{
    return(
        <Modal className={classes.modal}>
            Hello this is a modal containing info on {target}
            <br/> <br/> <br/>
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