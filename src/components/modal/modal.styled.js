import styled, { css } from 'styled-components'
import { Colors, FontSize } from '../../styles'

export const IconClose = styled.img`
    top: 24px;
    right: 24px;
    width: 30px;
    height: auto;
    cursor: pointer;
    position: absolute;
    ${() =>
    css`
        &:hover {
          padding: 3px;
          border-radius: 100px;
          background: #E0EEF5;
        }
      `}
    `
export const IconClose2 = styled.img`
    width: 30px;
    height: auto;
    cursor: pointer;
    ${() =>
    css`
        &:hover {
          padding: 3px;
          border-radius: 100px;
          background: ${Colors.darkBlue};
        }
      `}
    `
export const Header = styled.div`
    height:72px;
    display: flex;
    align-items: center;
    flexDirection: 'row';
    color:${Colors.white};
    justify-content:space-between;
    padding: 20px 32px 20px 32px;
    background-color: ${Colors.softBlue};
`
export const Title = styled.p`
    line-height:0;
    font-weight:bold;
    font-size: ${FontSize.doubleExtraLarge}px;
`
export const TrackingTitle = styled.div`
    height:72px;
    display: flex;
    align-items: center;
    flexDirection: 'row';
    color: #333333;
    justify-content:space-between;
    padding: 20px 32px 20px 32px;
    background-color: ${Colors.white};
`
export const TrackHead = styled.div`
  width: 77vh;
  text-align: center;
`