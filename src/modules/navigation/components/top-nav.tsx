import * as React from 'react';
import { PitcharLogo } from './pitchar-logo';
import "../scss/top-nav.scss";
import { HiChevronLeft as LeftChevron } from 'react-icons/hi'
import { Button } from '../../buttons/components/button';

export const TopNav: React.FunctionComponent<{}> = (): JSX.Element => {
  return (
    <nav className="top-nav">
      <a className="context-previous" href="#!">
        <LeftChevron className="icon" /> Dashboard
      </a>
      <div className="current-location">
        <PitcharLogo className="logo-image" />
        <div className="location">
          Studio
        </div>
      </div>
      <section className="filename-container">
        <div className="label">File Name</div>
        <div className="name">Pitch#830</div>
      </section>
      <section className="button-group">
        <Button type="normal">
          Undo
        </Button>
        <Button type="normal">
          Redo
        </Button>
        <Button type="normal">
          Save
        </Button>
        <Button type="secondary" size="large">
          Share
        </Button>
      </section>
    </nav>
  )
}