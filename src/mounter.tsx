import * as React from 'react';
import { render } from 'react-dom';
import { RootComponent } from './modules/root/components/root';

render(<RootComponent />, document.querySelector('[data-mount-point]'));