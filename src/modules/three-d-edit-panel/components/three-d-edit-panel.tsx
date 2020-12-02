import * as React from 'react';
import { Button } from '../../buttons/components/button';

import "../scss/three-d-edit-panel.scss";

export const ThreeDEditPanel: React.FunctionComponent<{}> = (props): JSX.Element => {
  return (
    <nav className="three-d-edit-panel">
      <Button type="normal" size="small">
        Effects
      </Button>
      <Button type="normal" size="small">
        Crop
      </Button>
      <Button type="normal" size="small">
        Copy
      </Button>
      <Button type="normal" size="small">
        Delete
      </Button>
    </nav>
  )
}