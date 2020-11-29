import * as React from 'react';
import { Button } from '../../buttons/components/button';
import { IconInput } from '../../input/components/icon-input';
import { MdSearch as SearchIcon } from 'react-icons/md';

import "../scss/context-menu.scss";

export const ContextMenu: React.FunctionComponent<{}> = (): JSX.Element => {
  return (
    <aside className="context-menu">
      <header className="header-title">
        Uploads
      </header>
      <section className="primary-button-group">
        <Button size="large" type="primary">
          Upload Image, Videos, Sound
        </Button>
        <Button size="large" type="primary">
          Upload 3D Model
        </Button>
      </section>
      <IconInput icon={<SearchIcon />} placeholder="Search" />
      <header className="content-title">
        My Files
      </header>
    </aside>
  )
}