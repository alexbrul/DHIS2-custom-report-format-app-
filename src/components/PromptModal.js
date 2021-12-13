import { Modal, Button} from '@dhis2/ui'

const PromptModal = ({target, click}) =>{
    return(
        <Modal>
            Hello this is a modal containing info on {target}
            <Button primary onClick ={()=>{
                click(false)
            }}>Close me</Button>
        </Modal>
    )
}

export default PromptModal;