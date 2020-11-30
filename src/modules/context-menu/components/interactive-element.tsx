import * as React from 'react';
import { MdMoreVert as MoreIcon } from 'react-icons/md';
import { IconInput } from '../../input/components/icon-input';
import { MdCheck as CheckIcon , MdEdit as RenameIcon, MdDeleteSweep as DeleteIcon } from 'react-icons/md';

import "../scss/interactive-element.scss";
import ClickAwayListener from '../utils/click-away-listener';

export interface InteractiveElementProps {
  thumbnail: string;
  title: string;
  id: number;
}

export const InteractiveElement: React.FunctionComponent<InteractiveElementProps> = (props): JSX.Element => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const [titleEditState, setTitleEditState] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>("");
  const inputEl = React.useRef<HTMLInputElement>(null);
  
  React.useEffect(() => {
    setTitle(props.title)
  }, []);

  function renderMenuContent(menuOpen: boolean): JSX.Element {
    if (!menuOpen) {
      return <MoreIcon />
    }

    function getInputValue(text: string): string {
      if (titleEditState) return text;
      if (text.length > 10) return text.substr(0, 10) + '..';
      return text;
    }
  
    return (
      <ClickAwayListener onClickAway={() => { setMenuOpen(false); setTitleEditState(false); }}>
        <header className="menu-header">
          <form onSubmit={ev => { ev.preventDefault(); setTitleEditState(false); }}>
            <IconInput
              className="media-title"
              disabled={!titleEditState}
              iconPos="end"
              icon={titleEditState ? <CheckIcon
                style={{ color: "black", fontSize: 22 }}
                onClick={(ev) => { setTitleEditState(false); ev.stopPropagation(); }}
              /> : <div />}
              placeholder=""
              value={getInputValue(title)}
              onChange={(ev) => setTitle(ev.target.value)}
              ref={inputEl}
              inputClass="input-el"
            />
          </form>
          <section className="subtitle">
            File Type: png
          </section>
        </header>
        <main className="menu-options">
          <section className="option" onClick={() => { setTitleEditState(true); setTimeout(() => inputEl.current?.focus(), 10) }}>
            <div className="icon">
              <RenameIcon />
            </div>
            <div className="label">
              Rename
            </div>
          </section>
          <section className="option">
            <div className="icon">
              <DeleteIcon />
            </div>
            <div className="label">
              Delete
            </div>
          </section>
        </main>
      </ClickAwayListener>
    )
  }

  return (
    <article className="interactive-element" style={{ backgroundImage: `url(${props.thumbnail})` }}>
      <div className={menuOpen ? 'more-menu' : 'more-menu-button'} onClick={() => setMenuOpen(true)}>
        {renderMenuContent(menuOpen)}
      </div>
    </article>
  );
}