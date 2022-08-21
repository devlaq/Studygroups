import React from 'react';
import './App.css';

import { motion } from 'framer-motion';
import { Expansion } from './components/Expansion';
import { Button } from '@mui/material';
import { Hierarchy } from './components/hierarchy/Hierarchy';
import { HierarchyElement } from './components/hierarchy/HierarchyElement';

function App() {
  return (
    <div className="App">
      <Hierarchy>
        <HierarchyElement>
          <HierarchyElement></HierarchyElement>
        </HierarchyElement>
      </Hierarchy>
    </div>
  );
}

export default App;
