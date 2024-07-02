import React from "react";
import { LayoutProps } from "./Layout.props";
import { Footer, Header, Main } from "./Layout.style";
import { Outlet } from "react-router-dom";

const LayoutComponent = (props: LayoutProps): JSX.Element => {
  const {} = props;

  return (
    <>
      <Header></Header>
      <Main>
        <Outlet />
      </Main>
      <Footer></Footer>
    </>
  );
};

export default React.memo(LayoutComponent);
