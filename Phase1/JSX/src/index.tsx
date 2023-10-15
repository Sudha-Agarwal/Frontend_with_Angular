import * as React from 'react';
import { createRoot } from 'react-dom/client';

const App = () => {
    return <h1>Hello World</h1>
    
}
const root = document.getElementById('root');
const reactRoot = createRoot(root);
reactRoot.render(<App />);


