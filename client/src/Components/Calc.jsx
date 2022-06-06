import { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Operator from './Operator'
import Digit from './Digit'


const Calc = () => {
    const [value, setValue] = useState(null)
    const [activeOp, setActiveOp] = useState(null)

    useEffect(() => {
        initValue()
    }, [])

    const initValue = async () => {             
        await axios
            .get('http://localhost:5000/value')
            .then(res => setValue(res.data))
            .catch(e => console.log(e))
    }

    return (
        <StyledCalc>
            <ValueBox>
                {value}
            </ValueBox>
            <OperatorsWrapper>
                {operators.map((op, i) => {
                    return (
                        <Operator 
                            key={`Operator-${i}`}
                            operator={op}
                            activeOp={activeOp}
                            setActiveOp={setActiveOp}
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
                            activeOp={activeOp}
                            setValue={setValue}
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
    height: 100%;
    overflow: auto;
    ::-webkit-scrollbar {            
                width: 5px;                
                height: 7px;

                &:hover {
                    cursor: pointer;
                }
        }

        ::-webkit-scrollbar-track {
                background-color: transparent;                
                border-radius: 10px;                
        }

        ::-webkit-scrollbar-thumb {                
                background-color: black;
                border-radius: 10px;
        }
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