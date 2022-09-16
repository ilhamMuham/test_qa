import React from 'react'
import { isArray } from 'lodash'
import { Images } from '../../assets'
import { Button } from '../../components'
import ErrorIcon from '@mui/icons-material/Error';
import { DialogContent } from '@mui/material'
import { DialogWrapper, DialogTitle, DialogMessage, DivButton, IconDialog, ParagraphScroll } from './alert.styled'

const Alerts = (props) => {
  const { open, close, msg, success, expired, isOnFullscreenComponent, longMessage } = props
  return (
    <DialogWrapper
      open={open}
      onClose={close}
      maxWidth='sm'
      disableBackdropClick
      container={isOnFullscreenComponent ? () => document.querySelector('.fullscreen') : ()=> document.body}
    >
      <DialogContent
        align='center'
        style={{ backgroundColor: '#f4f6f9', width: isArray(msg) ? '20vw' : '15vw', height: '18vh', padding: '2vh' }}
      >
        <DialogTitle>
          {success ? 'Success !' : expired ? 'Token Expired !' : 'Failed !'}
        </DialogTitle>
        {success || expired ? (
          <IconDialog src={success ? Images.success : Images.Expired} />
        ) : (
          <ErrorIcon color='error' style={{ fontSize: '7.6vh' }} />
        )}
      </DialogContent>

      <DialogContent align='center' style={{ height: isArray(msg) ? '24vh' : '18.5vh' }}>
        {isArray(msg) ? (
          <ParagraphScroll total={msg.length}>
            {msg.length > 0 && msg.map((e, index) => {
              return <DialogMessage key={index}>{e.ErrorMessage}</DialogMessage>
            })}
          </ParagraphScroll>
        ) : (
          <DialogMessage longMessage={longMessage} id={'alert'}>{msg}</DialogMessage>
        )}

        <DivButton
          id='alert-btn'
          onClick={() => close({ visible: false, msg: msg, success: success })}
        >
          <Button color='green' type='confirmation'>
            Ok
          </Button>
        </DivButton>
      </DialogContent>
    </DialogWrapper>
  )
}

export default Alerts
