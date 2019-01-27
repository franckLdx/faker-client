import * as React from 'react';
import { Products } from './products';
import { Todos } from './todos';
import { Nav, NavLink, TabContent, NavItem } from 'reactstrap';
import TabPane from 'reactstrap/lib/TabPane';
import styled from 'styled-components';

const StyledTabPane = styled(TabPane)`
  height: ${window.innerHeight * .85}px;
  width: 100%;
  max-width: 300px;
  min-width: 250px;
`;

type ActiveTab = "Products" | "Todos";

export const Home: React.SFC<{}> = () => {
  const [activeTab, setActiveTab] = React.useState("Products" as ActiveTab);

  return (
    <>
      <Nav pills>
        <Pills tabId="Products" activeTab={activeTab} setActiveTab={setActiveTab}>
          <h5>Products</h5>
        </Pills>
        <Pills tabId="Todos" activeTab={activeTab} setActiveTab={setActiveTab}>
          <h5>Todos</h5>
        </Pills>
      </Nav>
      <TabContent activeTab={activeTab}>
        <StyledTabPane tabId="Products">
          <Products />
        </StyledTabPane>
        <StyledTabPane tabId="Todos">
          <Todos />
        </StyledTabPane>
      </TabContent>
    </>
  );
}

interface Pills {
  children: React.ReactNode;
  tabId: ActiveTab;
  activeTab: ActiveTab;
  setActiveTab: (tabId: ActiveTab) => void;
}

const Pills: React.SFC<Pills> = ({ children, tabId, activeTab, setActiveTab }) => {
  const onClick = React.useCallback(
    () => setActiveTab(tabId),
    []
  );

  return (
    <NavItem>
      <NavLink
        className={`${activeTab === tabId ? "active" : ""}`} onClick={onClick}>
        {children}
      </NavLink>
    </NavItem>
  );
}