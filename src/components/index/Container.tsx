import styled from 'styled-components'

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 3rem;
  padding: 0 2rem 1rem 2rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 2rem;

  @media (max-width: 600px) {
    padding: 0 1rem 1rem 1rem;
    padding-top: 1rem;
    gap: 1.5rem;
  }
`

export default ContentSection
