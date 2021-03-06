import '../scss/context-menu.scss';

import * as React from 'react';
import { MdSearch as SearchIcon } from 'react-icons/md';

import { Button } from '../../buttons/components/button';
import { IconInput } from '../../input/components/icon-input';
import { InteractiveElement } from './interactive-element';
import { MediaUploadButtons } from './media-upload-buttons';
import { ThreeDUpload } from './three-d-upload-buttons';

export interface MediaFiles {
  thumbnail: string;
  id: number;
  title: string;
}

const mediaFiles: Array<MediaFiles> = [
  {
    thumbnail: "https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format",
    id: 0,
    title: "Laptop"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1606661292047-dc01d8c5cb51?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format",
    id: 1,
    title: "Sunset"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1606629201460-734b46a7704d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format",
    id: 2,
    title: "Artistic Painting"
  },
  {
    thumbnail: "https://images.unsplash.com/photo-1606608665346-a535077fedd1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format",
    id: 3,
    title: "Sphere"
  }
];

export interface ContextMenuProps {
  displayThreeDEditPanel: () => any;
  hideThreeDEditPanel: () => any;
}

export enum ThreeDActiveState {
  OBJ,
  MTL,
  GLTF,
  NONE
}

export const ContextMenu: React.FunctionComponent<ContextMenuProps> = (props): JSX.Element => {
  const [search, setSearch] = React.useState<string>('');
  const [imageUploadState, setImageUploadState] = React.useState<boolean>(false);
  const [contentTitle, setContentTitle] = React.useState<string>("My Files");
  const [displayImageUploadState, setDisplayImageUploadState] = React.useState<boolean>(false);
  const [displayThreeDUploadState, setDisplayThreeDUploadState] = React.useState<boolean>(false);
  const [threeDActiveState, setThreeDActiveState] = React.useState<ThreeDActiveState>(ThreeDActiveState.NONE);

  function openImageUploader(): void {
    setDisplayImageUploadState(true);
    setContentTitle("Crop");
  }

  function renderContent(): React.ReactNode {
    if (!displayImageUploadState) return mediaFiles.filter(
      media => media.title.toLowerCase().includes(search.toLowerCase())
    ).map(media => (
      <InteractiveElement id={media.id} thumbnail={media.thumbnail} key={media.id} title={media.title} />
    ));

    return (
      <section className="crop-container">
        <img
          src={mediaFiles[2].thumbnail}
          className="crop-image-display"
        />
        <Button type="secondary" size="large" className="done-btn" onClick={() => { setDisplayImageUploadState(false); setImageUploadState(false); }}>
          Done
        </Button>
      </section>
    );
  }

  function processThreeDUpload(state: ThreeDActiveState): void {
    if (threeDActiveState === ThreeDActiveState.NONE) {
      setThreeDActiveState(state);
      props.displayThreeDEditPanel();
    } else {
      console.log("pog");
      setThreeDActiveState(ThreeDActiveState.NONE);
      setDisplayThreeDUploadState(false);
      props.hideThreeDEditPanel();
    }
  }

  function renderImageButtons(): React.ReactNode {
    if (imageUploadState) return (
      <MediaUploadButtons
        onImage={() => openImageUploader()}
        onVideo={() => { }}
        on360Video={() => { }}
      />
    );
    return (
      <Button size="large" type="primary" onClick={() => setImageUploadState(true)}>
        Upload Image, Videos, Sound
      </Button>
    );
  }

  function renderThreeDButtons(): React.ReactNode {
    if (displayThreeDUploadState) return (
      <ThreeDUpload
        onOBJ={() => processThreeDUpload(ThreeDActiveState.OBJ)}
        onMTL={() => processThreeDUpload(ThreeDActiveState.MTL)}
        onGLTF={() => processThreeDUpload(ThreeDActiveState.GLTF)}
        activeState={threeDActiveState}
      />
    );

    return (
      <Button size="large" type="primary" onClick={() => setDisplayThreeDUploadState(true)}>
        Upload 3D Model
      </Button>
    );
  }

  return (
    <aside className="context-menu">
      <header className="header-title">
        Uploads
      </header>
      <section className="primary-button-group">
        {renderImageButtons()}
        {renderThreeDButtons()}
      </section>
      <IconInput
        icon={<SearchIcon />}
        placeholder="Search"
        iconPos="front"
        value={search}
        onChange={ev => setSearch(ev.target.value)}
      />
      <header className="content-title">
        {contentTitle}
      </header>
      <section className="elements-container">
        {renderContent()}
      </section>
    </aside>
  )
}