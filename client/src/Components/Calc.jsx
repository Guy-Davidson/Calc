import styled from 'styled-components'
import Operator from './Operator'
import Digit from './Digit'

const Calc = () => {
    return (
        <StyledCalc>
            <ValueBox>
                0
            </ValueBox>
            <OperatorsWrapper>
                {operators.map((op, i) => {
                    return (
                        <Operator 
                            key={`Operator-${i}`}
                            operator={op}
                        />
                    )
                })}
            </OperatorsWrapper>
            <DigitsWrapper>
                {digits.map((digit, i) => {
                    return (
                        <Digit 
                            key={`Digit-${i}`}
                            digit={digit}
                        />
                    )
                })}
            </DigitsWrapper>            
        </StyledCalc>
    )
}

const StyledCalc = styled.div`
    height: 80vh;
    width: 35vw;
    margin-left: 10vw;
    background-color: #333;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 5px;
`

const ValueBox = styled.div`
    height: 5rem;
    width: 100%;
    background-color: #222;    
    padding: 1rem;
    border-style: solid;
    border-width:2px;
    border-color: #ccc;
    margin-bottom: 2rem;
    user-select: none;
`

const OperatorsWrapper = styled.div`    
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
`

const DigitsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
`

const operators = [
    {
        name: 'plus',
        displayName: '+',
    },
    {
        name: 'minus',
        displayName: '-',
    },
    {
        name: 'multiply',
        displayName: 'x',
    },
]

const digits = [0,1,2,3,4,5,6,7,8,9]

export default Calc