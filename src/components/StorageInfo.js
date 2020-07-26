import React from 'react';
import StoragePopup from './StoragePopup';

const StorageInfo = () => {
    return(
        <section className="storage-info">

            <StoragePopup />

            <p>You’ve used <b>815 GB</b> of your storage</p>

            <div className="storage-info__bar">
                <div className="storage-info__bar-content">
                    <div className="storage-info__bar-used">
                        <div className="storage-info__bar-dot"></div>
                    </div>
                </div>

                <div className="storage-info__bar-text">
                    <p>0 GB</p>
                    <p>1000 GB</p>
                </div>
            </div>
        </section>
    )
};

export default StorageInfo;