import * as React from 'react';
import { Button } from '../../buttons/components/button';

import "../scss/three-d-upload-buttons.scss";
import { ThreeDActiveState } from './context-menu';

export interface ThreeDUploadProps {
  onOBJ: () => any;
  onMTL: () => any;
  onGLTF: () => any;
  activeState: ThreeDActiveState;
}

export const ThreeDUpload: React.FunctionComponent<ThreeDUploadProps> = (props): JSX.Element => {
  return (
    <section className="three-d-upload-container">
      <section className="section">
        <Button type="secondary" onClick={props.onOBJ} disabled={props.activeState === ThreeDActiveState.OBJ}>
          {props.activeState === ThreeDActiveState.OBJ ? "Done" : "OBJ"}
        </Button>
        <Button type="secondary" onClick={props.onMTL} disabled={props.activeState === ThreeDActiveState.MTL}>
          {props.activeState === ThreeDActiveState.MTL ? "Done" : "MTL"}
        </Button>
      </section>
      <Button type="secondary" onClick={props.onGLTF} disabled={props.activeState === ThreeDActiveState.GLTF}>
          {props.activeState === ThreeDActiveState.GLTF ? "Done" : "GLTF"}
      </Button>
    </section>
  )
}