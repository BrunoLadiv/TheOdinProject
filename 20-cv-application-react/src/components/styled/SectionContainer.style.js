import styled from 'styled-components'

export const SectionContainer = styled.section`
  background-color: ${props => props.bg || 'none' };
  flex: 1 1 ${props => props.percentageSize || '100%' };
  min-width: ${props => props.minWidth || '300px' };
  @media (max-width: 1316px) {
    width: 100%; 
    order: ${props => props.order || '0' }
  }
  
`
