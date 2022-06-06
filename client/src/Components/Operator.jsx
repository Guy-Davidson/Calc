import styled from 'styled-components'

const Operator = (props) => {
    const { operator } = props

    return (
        <StyledOperator operatorName={operator.name}>
            {operator.displayName}
        </StyledOperator>
    )
}

const StyledOperator = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    user-select: none;
    margin: ${props => props.operatorName === 'minus' ? '0 2rem' : '0'};       
    box-shadow: 0px 0px 0px 0px rgb(256,256,256, .1);
    transition: all .2s;

    &:hover {
        box-shadow: 0px 0px 2px 2px rgb(256,256,256, .1);
    }
`

export default Operator