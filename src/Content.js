import { useState } from 'react';
import React from 'react';

import Main from './Main';
import NonMain from './NonMain';

function Content() {
    
    const [showMain, setShowMain] = useState(false);
    console.log(showMain);
    
    return (
        <header className="App-header">
            {showMain === true? <Main />: <NonMain setShowMain={setShowMain}/>}
        </header>
    )
}

export default Content;