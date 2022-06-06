import styled from 'styled-components'

const Digit = (props) => {
    const { digit } = props

    return (
        <StyledDigit digit={digit}>
            {digit}
        </StyledDigit>
    )
}

const StyledDigit = styled.div`
    width: 100%;
    height: 4rem;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    user-select: none;    
    box-shadow: 0px 0px 0px 0px rgb(256,256,256, .1);
    transition: all .2s;

    &:hover {
        box-shadow: 0px 0px 2px 2px rgb(256,256,256, .1);
    }
`

export default Digit