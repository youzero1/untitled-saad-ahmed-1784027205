import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MultiplicationTable from '@/pages/MultiplicationTable';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultiplicationTable />} />
      </Routes>
    </BrowserRouter>
  );
}
