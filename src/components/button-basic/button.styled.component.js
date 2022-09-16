import styled from "styled-components";

export const ContainerButton = styled.div`
    border: ${(p) => p.outline ? `1px solid ${p.outline}` : 'none'};
    padding: 1px 10px;
    display: inline-flex;
    align-items: center;
    background-color: ${(p) => p.bg ? p.bg : 'transparent'};
    color: ${(p) => p.bg ? 'white' : 'black'};
    border-radius: 4px;
    cursor: pointer;
`
export const LabelBtn = styled.p`
    font-weight: 600;
`