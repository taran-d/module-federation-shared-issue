import React from 'react';
import { log } from '@dtaran/logger';

const Button = () => (
  <button onClick={() => log('Inside app3')}>App 3 Button</button>
);

export default Button;