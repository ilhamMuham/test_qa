import styled, { css } from 'styled-components'

import { Colors } from '../../styles'

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${(p) => p.borderColor ? '1px solid' : 0};
  border-color: ${(p) => p.borderColor || 'transparent'};
  outline: 0;
  min-width: ${(p) => p.width || 12.29}vh;
  height: 3.4vh;
  border-radius: 6px;
  color: ${(p) =>
  (p.color === 'grey'
    ? Colors.black : p.color === 'transparent'
      ? Colors.grey : Colors.pureWhite)};
  transition: all 0.3s ease-in-out;
  cursor: ${(p) => (p.disable ? 'not-allowed' : 'pointer')};
  background: ${(p) =>
        p.color === 'blue'
          ? Colors.softBlue
          : p.color === 'grey'
            ? Colors.cancelColor
            : p.color === 'red'
              ? Colors.deleteColor
              : p.color === 'yellow'
                ? Colors.yellowWarn
                : p.color === 'orange'
                  ? Colors.orange
                  : p.color === 'newblue'
                    ? Colors.softBlue
                    : p.color === 'newgrey'
                      ? Colors.softGrey :
                      p.color === 'transparent'
                        ? Colors.transparent : Colors.softGreen};
  ${(p) =>
                          !p.disable &&
    css`
      &:hover {
        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
          0px 1px 10px 0px rgba(0, 0, 0, 0.12);
      }
      &:active {
        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14),
          0px 3px 14px 2px rgba(0, 0, 0, 0.12);
        background: ${(p) =>
      p.color === 'blue'
        ? Colors.darkBlue
        : p.color === 'grey'
          ? Colors.grey
          : p.color === 'red'
            ? Colors.deleteColor
            : p.color === 'yellow'
              ? Colors.yellowWarn
              : p.color === 'newblue'
                ? Colors.softGrey :
                p.color === 'transparent'
                  ? Colors.transparent : Colors.darkGreen};
      }
    `}

  ${(p) =>
                    p.type === 'confirmation' &&
    css`
      width: 5.2vw;
      height: 3.5vh;
      font-size: 1.5vh;
      border-radius: 0.5vh;
    `}
`
