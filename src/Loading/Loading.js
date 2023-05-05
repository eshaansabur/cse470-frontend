import React from 'react';

const Loading = () => {
    return (
        <div className='container loading'>
            <div className="row mt-5 mb-5 text-center">
            <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>
            </div>
        </div>
    );
};

export default Loading;