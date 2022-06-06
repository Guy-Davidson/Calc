import styled, { css } from 'styled-components'
import axios from 'axios'

const Digit = (props) => {
    const { digit, activeOp, setValue } = props

    return (
        <StyledDigit 
            digit={digit} 
            isDisabled={typeof activeOp !== 'string'}
            onClick={async () => {                
                if(typeof activeOp === 'string') {
                    console.log("Hey");
                    await axios
                        .post(`http://localhost:5000/${activeOp}?digit=${digit}`)
                        .then(res => setValue(res.data))
                        .catch(e => console.log(e))   
                }
            }}
            >
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
    cursor: pointer;
    box-shadow: 0px 0px 0px 0px rgb(256,256,256, .1);
    transition: all .2s;

    &:hover {
        box-shadow: 0px 0px 2px 2px rgb(256,256,256, .1);
    }

    ${props => {
        if(props.isDisabled) {
            return css`
                background-color: rgb(0,0,0,.2);
                color: #777;
                cursor: not-allowed;
            `
        }
    }}
`

export default Digit