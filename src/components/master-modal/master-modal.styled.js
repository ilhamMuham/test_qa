import styled from 'styled-components'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import { Colors } from '../../styles'

export const DialogStyle = styled(Dialog)`
  div.MuiDialog-container.MuiDialog-scrollPaper {
    div.MuiDialog-paperWidthLg {
      width: ${(props) => props.width}vw;
      max-width: none;
      ${(props) =>
  props.height ? `height: ${props.height}${props.heightType ? props.heightType : 'vh'};` : ''}
    }
    div.MuiDialog-paperWidthXl {
      width: ${(props) => props.width}vw;
    }
  }
`

export const Header = styled(DialogTitle)`
  &.MuiDialogTitle-root {
    padding: 5px 15px;
    background-color: ${(props) => (props.whiteheader === 'true' ? Colors.white : Colors.softBlue)};
  }
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DivTitle = styled.div`
  width: auto;
  display: flex;
  min-width: 6.5%;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => (props.whiteheader === 'true' ? Colors.black : Colors.pureWhite)};
  font-family: 'Open Sans', sans-serif;
`

export const VesselContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 30px;
  align-items: center;
  background-color: ${Colors.transBlue};
`

export const Vessel = styled.img`
  width: 100px;
  height: 80px;
  margin-right: 20px;
`

export const SubTitle = styled.label`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.softBlue};
`

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;  /* If changing this disturbs the other modal. Please mention! */
  display: flex;
  padding: 10px 10px 20px 10px;
`

export const FormContainerStatic = styled.div`
  width: 100%;
  /* height: 100%;   If changing this disturbs the other modal. Please mention! */
`
export const ButtonPrint = styled.div`
  cursor: pointer;
  min-width: 70px;
  padding: 2px 10px;
  text-align: center;
  margin-left: 10px;
  background: #f4f6f9 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 3px #00000033;
  border: 2px solid #707070;
  border-radius: 5px;
  display: flex;
  align-items: center;
  height: 40px;
`

export const IconButtonUnfinalized = styled.img`
  flex-shrink: 0;
  user-select: none;
  font-size: 1.5rem;
  fill: currentColor;
  margin-left: 10px;
`
export const ButtonUnfinalized = styled.div`
  position: relative;
  width: auto;
`

export const PopoupUnfinalized = styled.div`
  visibility: hidden;
  opacity: 0;
  width: 306px;
  height: 140px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: white;
  border: 1px solid ${Colors.softBlue};
  border-radius: 6px;
  transition: visibility 0s, opacity 400ms, top 400ms linear;
  z-index: 100;

  &.show {
    top: 50px;
    opacity: 1;
    visibility: visible;
  }
`

export const UnfinalizedButton = styled.div`
  width: 100%;
  height: 69px;
  padding: 16px;
  display: flex;
  cursor: pointer;
  align-items: center;

  &:hover {
    background-color: ${Colors.smootBlue};
  }
`

export const UnfinalizedButtonTitle = styled.p`
  font-size: 14px;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 4px;
  color: ${Colors.cancelTextColor}
`

export const UnfinalizedButtonSubitle = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  margin-top: 0;
  color: ${Colors.modalGrey}
`