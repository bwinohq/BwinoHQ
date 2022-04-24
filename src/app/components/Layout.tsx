import { ReactNode } from "react";
import styled from "styled-components";
import Navbar from "./Navbar/Navbar";

interface Props {
    children: ReactNode;
    backgroundColor: string;
  }

const Layout = (props: Props) => {
  return (
    <LayoutDiv backgroundColor={props.backgroundColor}>
        <Navbar />
        <div className="children">
            {props.children}
        </div>
    </LayoutDiv>
  )
}

const LayoutDiv = styled.div<Props>`
    background-color: ${(props: any) => props.backgroundColor};
    min-height: 100vh;
`

export default Layout