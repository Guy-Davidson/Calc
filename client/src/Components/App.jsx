import styled from 'styled-components'
import GlobalStyles from '../Styles/Global.Styled'
import Calc from './Calc'

const App = () => {    
    return (
        <>
            <GlobalStyles />
            <StyledApp>                            
                <Calc />
            </StyledApp> 
        </>
    )
}

const StyledApp = styled.div`        
    height: 100vh; 
    width: 100vw;
    display: flex;
    align-items: center;
    background-repeat: no-repeat;
    background-size: auto;
    object-fit: cover;    
    background-image: linear-gradient(to right, #aaa ,#444);
`

export default App