import React from 'react';

const Menu = () => {

    const icons = [
        'icon-document.svg',
        'icon-folder.svg',
        'icon-upload.svg'
    ]

    return(
        <section className="menu">
            <div className="menu__logo">
                <img src={process.env.PUBLIC_URL + '/static/svg/logo.svg'} />
            </div>

            <div className="menu__icons">
                {
                    icons.map((icon, i) => (
                        <div className="menu__icon" key={i}>
                            <img src={process.env.PUBLIC_URL + '/static/svg/' + icon} />
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Menu;