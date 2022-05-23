import React from 'react';
import Places from './Places';

const View = ({lats, setCoordinates, setBounds, coordinate}) => {
    return (
        <div className="main">
            <div className="content-container">
                <Places 
                lats={lats}
                setCoordinates={setCoordinates}
                setBounds={setBounds}
                coordinates={coordinate}
            />
            </div>
        </div>
    );
}

export default View;