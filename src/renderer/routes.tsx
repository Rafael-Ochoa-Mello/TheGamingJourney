import { MemoryRouter, Route, Routes } from 'react-router-dom';

import Home from './views/Home';
import Game from './views/Game';

export default function appRoutes() {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/teste" Component={Game}/>
      </Routes>
    </MemoryRouter>
  );
}