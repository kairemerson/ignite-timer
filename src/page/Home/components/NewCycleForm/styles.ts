import styled from "styled-components"

export const FormContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${props=> props.theme["gray-100"]};
    font-size: 1.125rem;
    font-weight: bold;
    flex-wrap: wrap;
`

const BaseINput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${props => props.theme["gray-500"]};
    font-weight: bold;
    font-size: inherit;
    padding: 0 0.5rem;
    color: ${props => props.theme["gray-100"]};

    &::placeholder {
        color: ${props => props.theme["gray-500"]}
    }
    &:focus{
        box-shadow: none;
        border-color: ${props => props.theme["green-500"]};
    }
`

export const TaskInput = styled(BaseINput)`
    flex: 1;
`

export const MinutesAmountInput = styled(BaseINput)`
    width: 4rem;
`