import styled from "styled-components"

const SubHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  & > button {
    padding: 5px;
  }
  & label {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
`
export default function SubHeader() {
  return (
    <SubHeaderWrapper>
      <div>
        <label htmlFor="category">Categories:</label>
        <select id="category" name="category">
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>
      <button>Add new Product</button>
    </SubHeaderWrapper>
  )
}
