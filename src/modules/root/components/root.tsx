import * as React from 'react';
import { ContextMenu } from '../../context-menu/components/context-menu';
import { SideNav } from '../../navigation/components/side-nav';
import { TopNav } from '../../navigation/components/top-nav';
import { ThreeDEditPanel } from '../../three-d-edit-panel/components/three-d-edit-panel';
import "../scss/root.scss";

export const RootComponent: React.FunctionComponent<{}> = ({ }): JSX.Element => {
  const [threeDEditPanelState, setThreeDEditPanelState] = React.useState<boolean>(false);
  return (
    <section className="root-container">
      <TopNav />
      <main className="main-container">
        <SideNav />
        <ContextMenu
          displayThreeDEditPanel={() => setThreeDEditPanelState(true)}
          hideThreeDEditPanel={() => setThreeDEditPanelState(false)}
        />
        <div className="main-content">
          {threeDEditPanelState && <ThreeDEditPanel />}
        </div>
      </main>
    </section>
  )
}