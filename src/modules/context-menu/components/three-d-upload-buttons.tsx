import * as React from 'react';
import { Button } from '../../buttons/components/button';

export interface ThreeDUploadProps {
  
}

export const ThreeDUpload: React.FunctionComponent<ThreeDUploadProps> = (props): JSX.Element => {
  return (
    <section className="three-d-upload-container">
      <section className="section">
        <Button type="secondary" size="large">
          OBJ
        </Button>
        <Button type="secondary" size="large">
          MTL
        </Button>
      </section>
      <Button type="secondary" size="large">
        GLTF
      </Button>
    </section>
  )
}