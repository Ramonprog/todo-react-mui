import styled from '@emotion/styled'

export const ContainerForm: any = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;

  & input {
    padding: .5rem 1rem;
    margin-bottom: 1.5rem;
    border-radius: 0;
    border: 1px solid #282c34;
  }

  & input[type='submit'] {
    background-color: #61dafb;
   
    border: none;
    color: #282c34;
    transition: .5s;
    cursor: pointer;

    &:hover{
      color: #61dafb;
     background-color:#282c34 ;
    }
  }

  .input-container{
    display: flex;
  flex-direction: column;
    text-align: left;

    & label {
      font-weight: bold;
      margin-bottom: .4rem;
    }
  }
`
