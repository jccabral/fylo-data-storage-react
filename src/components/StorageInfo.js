import React from 'react';

const StorageInfo = () => {
    return(
        <section className="storage-info">

            <div>
                remaining storage 185 GB Left
            </div>

            <p>You’ve used 815 GB of your storage</p>

            <div>
                storage bar component

                0 GB
                1000 GB
            </div>
        </section>
    )
};

export default StorageInfo;