import { SectionContainer } from './components/styled/SectionContainer.style'
import ResumeForm from './components/ResumeForm'
import { ResumeContainer } from './components/styled/ResumeContainer'

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
        <ResumeContainer >
          <SectionContainer minWidth="150px" percentageSize="35%">
            <h2>TEST</h2>
          </SectionContainer>
          <SectionContainer minWidth="230px" percentageSize="60%">
            <h2>TEST2</h2>
          </SectionContainer>
        </ResumeContainer>
      </SectionContainer>
    </>
  )
}

export default App
