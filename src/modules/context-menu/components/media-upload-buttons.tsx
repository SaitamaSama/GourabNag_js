import * as React from 'react';
import { Button } from '../../buttons/components/button';
import "../scss/media-upload-buttons.scss";

export interface MediaUploadButtonsProps {
  onImage: () => any;
  onVideo: () => any;
  on360Video: () => any;
}

export const MediaUploadButtons: React.FunctionComponent<MediaUploadButtonsProps> = (props): JSX.Element => {
  return (
    <section className="media-upload-buttons">
      <Button type="secondary" onClick={props.onImage}>
        Image
      </Button>
      <Button type="secondary">
        Video
      </Button>
      <Button type="secondary">
        360 Video
      </Button>
    </section>
  )
}