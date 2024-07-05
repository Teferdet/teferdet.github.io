import {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Home from './pages/home';
import Poems from './pages/poems';
import Projects from "./pages/projects";

function App() {
    useEffect(() => {
        const baseTag = document.createElement('base');
        baseTag.href = '/me';
        document.head.appendChild(baseTag);
    }, []);

    // <Route path="me/projects" element={<Projects />} /> - in dev

    return (
        <BrowserRouter>
            <Routes>
                <Route path="me/poems" element={<Poems />} />

                <Route path="me/*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
