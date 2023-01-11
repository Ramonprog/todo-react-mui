import styled from '@emotion/styled'

export const ContainerTask: any = styled.div`
display:flex;
justify-content: space-between;
max-width: 400px;
margin:0 auto;
border-bottom: 1px solid #ccc;
padding: 1rem;
align-items: flex-end;

  & .detail {
    text-align: left;

    & h4{
      font-size: 1.2rem;
      margin-bottom: .5rem;
    }
  }

  & .actions{
    cursor: pointer;

    & svg {
      font-size: 1.2rem;
      margin-left: .5rem;
      transition: .5s;
    }
  }
`