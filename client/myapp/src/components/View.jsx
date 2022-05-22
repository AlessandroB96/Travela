import React from 'react';
import Places from './Places';

const View = ({lats}) => {
    return (
        <div className="main">
            <div className="content-container">
                <Places lats={lats}/>
            </div>
        </div>
    );
}

export default View;