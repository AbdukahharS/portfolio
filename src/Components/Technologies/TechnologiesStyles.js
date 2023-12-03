import styled from 'styled-components'

export const List = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin: 3rem 0;
  flex-wrap: wrap;

  @media ${(props) => props.theme.breakpoints.lg} {
    margin: 64px 0;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    margin: 64px 0;
    gap: 24px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListItem = styled.button`
  padding: 10px 15px;
  color: #fff;
  border: 1px solid #fff;
  background: transparent;
  border-radius: 5px;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &.active {
    background: #fff;
    color: #0f1624;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    max-width: 203px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-bottom: 14px;
    max-width: 320px;
  }
`
