import styled from "styled-components"
import { 
    Images
} from '../../assets'

export const ContainerLogin = styled.div`
    width: 90vh;
    z-index: 100;
    float : right;
    height: 100vh;
    padding: 100px;
    background-color: white;
    box-shadow: 0px -1px 45px -2px #000;
`
export const ContainerImg = styled.div`
    float : left
`
export const ContainerBig = styled.div`
    width: 100%;
    height: 100vh;
    background-image : url(${Images.login});
`
export const Title = styled.div`
    text-align: center;
`
export const ContainerLock = styled.div`
    color: white;
    height: 40px;
    padding: 6px;
    margin: 0px 290px;
    text-align: center;
    border-radius: 25px;
    background-color: purple;
`
export const TextTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`