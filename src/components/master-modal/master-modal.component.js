import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'
import IconButton from '@mui/material/IconButton'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

import {
  Title,
  Header,
  Vessel,
  DivTitle,
  SubTitle,
  FormContainer,
  TitleContainer,
  VesselContainer,
  FormContainerStatic,
  DialogStyle,
} from './master-modal.styled'
import { Images } from '../../assets'
import { Colors, FontSize } from '../../styles'
import { Button, Loading } from '../../components'

const MasterModal = (props) => {
  const { utilizeLoading, isLoading } = props

  const _renderMainComponent = () => (
    <>
      {props.hasSubtitle && !props.isProgress && !props.isPrintPreview && (
        <VesselContainer>
          {props.isSrModal ? (
            <Vessel src={Images.content1} />
          ) : props.isPrintOut ? (
            <Vessel src={Images.content1} />
          ) : (
            <Vessel src={Images.content1} />
          )}
          <SubTitle>{props.subTitle}<br/><span style={{ fontSize:'14px', color:Colors.softGrey }}>{props.subSubTitle}</span></SubTitle>


          {props.isFiture && (
            <Button
              type='submit'
              color='blue'
              disabled={props.disabled || false}
              id='mdl_dialog_save_sr_exec_btn'
              style={{
                float: 'right',
                marginRight: 10,
                fontSize: FontSize.small,
                borderRadius: '5px',
              }}
              onClick={props.handleSave}
            >
              <SaveIcon style={{ marginRight: '10px', color: 'white', fontSize: '20px' }} />
              <p style={{ marginRight: '10px' }}>SAVE</p>
            </Button>
          )}
          
        </VesselContainer>
      )}
      {props.isStatic ? (
        <FormContainerStatic>{props.children}</FormContainerStatic>
      ) : (
        <FormContainer>{props.children}</FormContainer>
      )}
    </>
  )

  const _renderLoading = () => (
    <div
      id='master-modal-loading'
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 732 }}
    >
      <Loading />
    </div>
  )
  return (
    <DialogStyle
      id='mdl_comp_dialog'
      open={props.showModal}
      maxWidth={props.maxWidth}
      fullWidth={props.fullWidth || false}
      onClose={props.handleClose}
      disableBackdropClick={true}
      aria-labelledby='customized-dialog-title'
      width={props.width || 40}
      height={props.height}
      heightType={props.heightType}
      disableEnforceFocus
    >
      <Header id='mdl_comp_dialog_header' whiteheader={props.whiteheader}>
        <TitleContainer>
          <DivTitle>
            {props.isDetail ? null : <FiberManualRecordIcon htmlColor={Colors.green} />}
            <Title id='modal-title' whiteheader={props.whiteheader}>{props.title}</Title>
          </DivTitle>
          <div id='modal-button' style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={props.handleClose} aria-label='close' id='mdl_dialog_x_btn'>
              <CloseIcon htmlColor={props.whiteheader ? Colors.black :Colors.pureWhite} />
            </IconButton>
          </div>
        </TitleContainer>
      </Header>
      {utilizeLoading && !isLoading
        ? _renderMainComponent()
        : utilizeLoading && isLoading
          ? _renderLoading()
          : _renderMainComponent()}
    </DialogStyle>
  )
}

MasterModal.defaultProps = {
  hasSubtitle: true,
  isExecutionSR: false
}

export default MasterModal
