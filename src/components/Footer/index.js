import React from 'react';

function Footer() {
    return (
        <section className="flex-row mx-2 justify-center">
            <div className="mx-2">
                <h3><a href="mailto:nrhuizar@gmail.com">@</a></h3>
            </div>
            <div className="mx-2">
                <h3><a href="https://www.linkedin.com/in/nick-huizar">LinkedIn</a></h3>
            </div>
            <div className="mx-2">
                <h3><a href="https://github.com/nrhuizar">GitHub</a></h3>
            </div>
            <div className="mx-2">
                <h3><a href="https://open.spotify.com/user/49w11fp3wmj5a3glgydvritxd?si=hXV-IbnXTEe7LANB0RrUwg">Spotify</a></h3>
            </div>
        </section>
    );
}

export default Footer;