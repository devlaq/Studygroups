import './App.css';

import { Hierarchy } from './components/hierarchy/Hierarchy';
import { HierarchyElement } from './components/hierarchy/HierarchyElement';
import { Article } from '@mui/icons-material';
import { HierarchyFolder } from './components/hierarchy/HierarchyFolder';
import { Resizable } from './components/Resizable';

function App() {
  return (
    <div className="App">
      <Hierarchy>
        <HierarchyElement icon={<Article/>}/>
        <HierarchyFolder>
          <HierarchyElement icon={<Article/>} />
          <HierarchyElement icon={<Article/>} />
          <HierarchyElement icon={<Article/>} />
          <HierarchyElement icon={<Article/>} />
          <HierarchyFolder>
            <HierarchyElement icon={<Article/>} />
            <HierarchyElement icon={<Article/>} />
            <HierarchyElement icon={<Article/>} />
          </HierarchyFolder>
          <HierarchyElement icon={<Article/>} />
          <HierarchyElement icon={<Article/>} />
          <HierarchyElement icon={<Article/>} />
        </HierarchyFolder>
      </Hierarchy>
    </div>
  );
}

export default App;
