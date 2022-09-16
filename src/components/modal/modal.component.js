import React from 'react'
import { withStyles } from '@mui/styles'
import Dialog from '@mui/material/Dialog'

import { Images } from '../../assets'
import { Header, IconClose, IconClose2, Title, TrackHead, TrackingTitle } from './modal.styled'

const Modal = (props) => {
    const MDialog = withStyles(() => ({
        paper: {
            width: `${props.width}%`,
            overflow: props.overflow ? props.overflow : 'hidden',
            height: `${props.height === 'auto' ? 'auto' : props.height + '%'}`,
        },
    }))(Dialog)

    const MyDialog = () => (
        <MDialog
            width={'40%'}
            id='m_comp_all_modal'
            fullWidth={true}
            open={props.showModal}
            maxWidth={props.maxWidth} // 'lg'| 'md'| 'sm'| 'xl'| 'xs'| false:default(sm)
            onClose={(event, reason)=>{
                if(reason ==='backdropClick') {
                    event.preventDefault()}
                else{
                    props.handleClose()
                }
            }
            }
            aria-labelledby='simple-dialog-title'
            disableEscapeKeyDown={props.disableEscapeKeyDown}
            {...props}
        >
            {props.isclose &&
                <IconClose
                    id='modal-close'
                    src={Images.close}
                    onClick={props.handleClose}
                />
            }
            {props.isHeader &&
                <Header>
                    <Title id='modal-title'>{props.title||props.headerTitle}</Title>
                    <IconClose2
                        id='modal-close'
                        src={Images.closeWhite}
                        onClick={props.handleClose}
                    />
                </Header>
            }
            {props.tracking &&
                <TrackingTitle>
                    <TrackHead>
                        <Title>{props.title||props.headerTitle}</Title>
                    </TrackHead>
                    <IconClose2
                        src={Images.closeWhite}
                        onClick={props.handleClose}
                    />
                </TrackingTitle>
            }
            {props.children}
        </MDialog>
    )
    return MyDialog()
}

Modal.defaultProps = {
    isclose: true,
    isHeader:false,
    disableEscapeKeyDown: true,
}

export default Modal
