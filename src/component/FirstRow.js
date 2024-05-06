import React from 'react';
import { FiShare2 } from 'react-icons/fi'; // Importez l'icône de partage FiShare2


// import { FontAwesomeIcon } from 'node_modules/@fortawesome/react-fontawesome';
// import { faShareAlt } from 'node_modules/@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
// Composant pour la première ligne
function FirstRow() {
  return (
    <div className="row justify-content-end m-0">
        <div className="col-auto" >
          <a href="#" className="btn btn-link" style={{color:'white',textDecoration: 'none',}} >Cast & Crew</a>
        </div>
        <div className="col-auto">
          <a href="#" className="btn btn-link" style={{color:'white',textDecoration: 'none',}}>User Review</a>
        </div>
        <div className="col-auto">
          <a href="#" className="btn btn-link"style={{color:'white',textDecoration: 'none',}}>Trivia</a>
        </div>
        <div className="col-auto">
          <a href="#" className="btn btn-link"style={{color:'white',textDecoration: 'none',}}>FAQ</a>
        </div>
        <div className="col-auto">
          <a href="#" className="btn btn-link"style={{color:'white',textDecoration: 'none',}}>imdbPro</a>
        </div>
        <div className="col-auto">
          <a href="#" className="btn btn-link"style={{color:'white',textDecoration: 'none',}}>All tapics</a>
        </div>
        <div className="col-auto">
          <a href="#" className="btn btn-link"style={{color:'white',textDecoration: 'none',}}><FiShare2 style={{ cursor: 'pointer', color: 'white' }} /></a>
        </div>
        

        {/* <div className="col-auto">
          <a href="#" className="btn btn-link">
            <FontAwesomeIcon icon={faShareAlt} />
          </a>
        </div> */}

      </div>
  );
}
export default FirstRow;