import { SectionContainer } from './components/styled/SectionContainer.style'
import ResumeForm from './components/ResumeForm'

function App() {
  return (
    <>
      <SectionContainer minWidth='300px' percentageSize='40%' >
        <ResumeForm /> 
        
      </SectionContainer>
          
      <SectionContainer minWidth='300px' percentageSize='60%' ></SectionContainer>
    </>
  )
}

export default App
