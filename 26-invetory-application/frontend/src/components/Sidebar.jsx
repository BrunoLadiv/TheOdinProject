import React from "react"
import styled from "styled-components"

const SidebarContainer = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`

export default function Sidebar() {
  return (
    <SidebarContainer>
      <button>add product</button>
      <button>categories</button>
    </SidebarContainer>
  )
}
