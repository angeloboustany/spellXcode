import React from 'react';
import Landing from './Pages/Landing/Landing';
import {BrowserRouter as Router,Route, Routes, Navigate} from 'react-router-dom';
import {Home, Problems, Leaderboard, Contest, Calendar, About, Help, Error, Contact, Login, Registration, SolveProblem} from './Pages/index.js'
import { Footer } from './containers';
import { ProtectedRoute } from './components';
import { Auth } from './Pages/index.js';

const App = () => (
  <Router>
     <Routes>
        <Route path="/" element={Auth.isAuthenticated()? <Navigate to="/home" replace/>:<Landing />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/about" element={<About />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/problem" element={<Problems />} />
          <Route path="/solveproblem" element={<SolveProblem />} />
        </Route>
        <Route path="/help" element={<Help />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>

);

export default App;
