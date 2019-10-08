import React from 'react';

function PageLayout(props) {
    return <div className="page-layout">
        Star Wars
        {props.children}
    </div>;
}

export default PageLayout;