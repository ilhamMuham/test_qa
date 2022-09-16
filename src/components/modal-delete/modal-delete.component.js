import React from 'react'
import Button from '../button'
import Modal from '../modal'
import { Colors } from '../../styles'
import {
    TitleDelete,
    TitleWrapper,
    QuestionText,
    DialogWrapper,
    ButtonWrapper,
} from './modal-delete.styled.component'

const ModalDel = (props) => {
    return (
        <Modal
            id={props.id}
            width={props.width}
            height={props.height}
            showModal={props.isOpen}
            handleClose={props.toggleDialog}
        >
            <DialogWrapper>
                <TitleDelete>
                    <TitleWrapper>{props.deleteTitle}</TitleWrapper>
                </TitleDelete>
                <QuestionText>{props.deleteText}</QuestionText>
                <ButtonWrapper>
                    <Button
                        id='del_exit'
                        color={Colors.grey}
                        onClick={props.toggleDialog}
                        borderColor={Colors.grey}
                        backgroundColor={Colors.white}
                        style={{ marginRight: '16px',  width: '100%' }}
                    >
                        Cancel
                    </Button>
                    <Button
                        id='m_del_submit'
                        style={{ 
                          width: '100%',
                          borderColor: `${Colors.red}`,
                          backgroundColor: `${Colors.red}`
                         }}
                        color={Colors.white}
                        onClick={props.submitDelete}
                    >
                        {props.id == 'm_actv_logout_mdl' ? 'Yes' : 'Delete'}
                    </Button>
                </ButtonWrapper>
            </DialogWrapper>
        </Modal>
    )
}

ModalDel.defaultProps = {
    width: 18,
    height: 28,
    isOpen: false,
    id: 'm_comp_modal_del',
}

export default ModalDel
