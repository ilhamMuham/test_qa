import {
    LabelBtn,
    ContainerButton
} from './button.styled.component'

const ButtonBasic = (props) => {
    return (
        <ContainerButton {...props}>
            <LabelBtn>{props.label || 'Submit'}</LabelBtn>
            {props.iconEnd && props.iconEnd}
        </ContainerButton>
    )
}
export default ButtonBasic