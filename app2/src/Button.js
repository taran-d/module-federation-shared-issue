import React from 'react';
import { log } from '@dtaran/logger';

const Button = () => (
  <button onClick={() => log('Inside app2')}>App 2 Button</button>
);

export default Button;