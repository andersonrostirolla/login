import React from 'react';
import { Link } from "react-router-dom";

const Logged: React.FC = () => {
  return (
    <div className="logged">
      <Link to="/login">Sair</Link>
    </div>
  )
}

export default Logged;
