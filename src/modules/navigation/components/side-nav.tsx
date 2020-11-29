import * as React from 'react';
import {
  MdAudiotrack as AudioIcon,
  MdImage as ImageIcon,
  MdMail as TextIcon,
  MdVideocam as VideoIcon,
  MdFileUpload as UploadIcon,
  MdSettings as SettingsIcon,
  MdMap as MarkerIcon
} from 'react-icons/md';
import { RiBarChart2Line as ModelIcon } from 'react-icons/ri';

import { SideNavItem } from './side-nav-item';
import "../scss/side-nav.scss";

 
export const SideNav: React.FunctionComponent<{}> = (): JSX.Element => {
  return (
    <nav className="side-nav">
      <a href="#!">
        <SideNavItem icon={<ImageIcon />} label="Image" />
      </a>
      <a href="#!">
        <SideNavItem icon={<ModelIcon />} label="3D Model" />
      </a>
      <a href="#!">
        <SideNavItem icon={<VideoIcon />} label="Video" />
      </a>
      <a href="#!">
        <SideNavItem icon={<AudioIcon />} label="Audio" />
      </a>
      <a href="#!">
        <SideNavItem icon={<TextIcon />} label="Text" />
      </a>
      <a href="#!">
        <SideNavItem icon={<TextIcon />} label="Button" />
      </a>
      <a href="#!">
        <SideNavItem icon={<UploadIcon />} label="Upload" active />
      </a>
      <a href="#!">
        <SideNavItem icon={<SettingsIcon />} label="G Drive" />
      </a>
      <a href="#!">
        <SideNavItem icon={<SettingsIcon />} label="Templates" />
      </a>
      <a href="#!">
        <SideNavItem icon={<MarkerIcon />} label="Marker" />
      </a>
    </nav>
  );
}