import styled from "styled-components"

const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100px;
`
const SearchInput = styled.input`
  width: 200px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15%;
`
const Glass = styled.svg`
  height: 1.5rem;
  padding: 0 0.5em 0 0.8em;
  fill: #abb2bf;
  &:hover {
    transform: scale(1.2);
  }
`

export default function Header({ setSearchText, searchText }) {
  return (
    <HeaderContainer>
      <h1>Product Manager</h1>
      <SearchForm>
        <SearchInput
          type="search"
          placeholder="Search..."
          aria-label="Search for products"
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <Glass
          className="search_icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          alt="search icon"
        >
          <path d="M46.599 46.599a4.498 4.498 0 0 1-6.363 0l-7.941-7.941C29.028 40.749 25.167 42 21 42 9.402 42 0 32.598 0 21S9.402 0 21 0s21 9.402 21 21c0 4.167-1.251 8.028-3.342 11.295l7.941 7.941a4.498 4.498 0 0 1 0 6.363zM21 6C12.717 6 6 12.714 6 21s6.717 15 15 15c8.286 0 15-6.714 15-15S29.286 6 21 6z"></path>
        </Glass>
      </SearchForm>
    </HeaderContainer>
  )
}
