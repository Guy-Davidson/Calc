import styled from 'styled-components'
import GlobalStyles from '../Styles/Global.Styled'
import imageSrc from '../Images/AppDevBGImage.jpg'

import Calc from './Calc'

const App = () => {
    
    return (
        <>
            <GlobalStyles />
            <StyledApp style={{ backgroundImage: `url(${imageSrc})`}}>                            
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
    background-color: black;
`

export default App