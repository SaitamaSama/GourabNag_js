import * as React from 'react';
import { ContextMenu } from '../../context-menu/components/context-menu';
import { SideNav } from '../../navigation/components/side-nav';
import { TopNav } from '../../navigation/components/top-nav';
import "../scss/root.scss";

export const RootComponent: React.FunctionComponent<{}> = ({ }): JSX.Element => {
  return (
    <section className="root-container">
      <TopNav />
      <main className="main-container">
        <SideNav />
        <ContextMenu />
        <div className="main-content" />
      </main>
    </section>
  )
}