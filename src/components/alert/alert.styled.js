import styled from 'styled-components'
import Dialog from '@mui/material/Dialog'

export const DialogWrapper = styled(Dialog)`
  &
    .MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthSm.MuiPaper-elevation24.MuiPaper-rounded {
    border-radius: 1vh;
  }
  ,
  & .MuiDialogContent-root {
    overflow-y: hidden;
  }
`
export const IconDialog = styled.img`
  align-items: center;
  margin: 0.5vh 0 2vh;
`
export const DialogTitle = styled.p`
  font-size: 3vh;
  font-weight: bold;
  margin: 0 0 1vh 0;
`
export const DialogMessage = styled.p`
  font-size: 1.5vh;
  font-weight: 600;
  margin-bottom: ${(p) => p.longMessage ? '3vh' : '4vh'};
  margin-top: 2vh;
`
export const DivButton = styled.div`
  margin-bottom: 0.5vh;
`
export const ParagraphScroll = styled.p`
    margin: 14px 0;
    overflow: scroll;
    overflow-x: hidden;
    height: ${(p) => p.total > 1 ? '125px' : '110px'};
`