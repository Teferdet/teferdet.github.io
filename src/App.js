import {useEffect} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Poems from './pages/poems';
import Project from './pages/projects';

function App() {
    useEffect(() => {
        const baseTag = document.createElement('base');
        baseTag.href = '/me';
        document.head.appendChild(baseTag);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="me" element={<Home />} />
                <Route path="me/poems" element={<Poems />} />
                <Route path="me/projects" element={<Project />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
