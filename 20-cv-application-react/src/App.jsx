import { SectionContainer } from './components/styled/SectionContainer.style'
import ResumeForm from './components/ResumeForm'
import { ResumeContainer } from './components/styled/ResumeContainer'
import { Resume } from './components/Resume'

function App() {
  return (
    <>
      <SectionContainer
        minWidth="380px"
        percentageSize="40%"
      >
        <ResumeForm />
      </SectionContainer>

      <SectionContainer
        minWidth="380px"
        percentageSize="60%"
      >
        <ResumeContainer>
          <SectionContainer
            order={'2'} 
            bg={'#323B4C'}
            minWidth="200px"
            percentageSize="35%"
          >
            <Resume side={'left'} />
          </SectionContainer>
          <SectionContainer
            bg={'white'}
            minWidth="230px"
            percentageSize="65%"
          >
            <Resume side={'right'} />
          </SectionContainer>
        </ResumeContainer>
      </SectionContainer>
    </>
  )
}

export default App
