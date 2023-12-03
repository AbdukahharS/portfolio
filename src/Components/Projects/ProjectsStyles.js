import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  border: 1px solid #adb0b4;
`

export const CardImg = styled.img`
  width: calc(100% + 3px);
  margin-top: -1px;
  margin-left: -2px;
`

export const CardTitle = styled.h3`
  text-align: center;
  font-weight: 500;
  font-size: 3rem;
  margin: 2rem;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  padding-top: 0;
`

export const Link = styled.a`
  background: #adb0b4;
  padding: 7px 10px;
  border-radius: 5px;
  color: #0f1624 !important;
  transition: 0.2s;

  &:hover {
    background: #fff;
  }
`
