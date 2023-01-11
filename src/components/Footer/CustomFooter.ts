import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

export const CustomFooter: any = styled(Box)`
  background-color: #282c34;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
 

  & footer p span {
    font-weight: bold;
    color: #61dafb;
  }

`;
