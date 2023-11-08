import styled from 'styled-components'

export const SectionContainer = styled.section`
  border: 1px solid rgb(0, 0, 0);
  background-color: white;
  flex: 1 1 ${props => props.percentageSize || '100%' };
  min-width: ${props => props.minWidth || '300px' };

`
