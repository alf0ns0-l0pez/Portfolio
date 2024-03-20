import "./PlatformsIcons.css"
export default function PlatformsIcons() {
    return (
        <div id="platformsicons">
            <h1>
            Some platforms I've worked on.
            </h1>
            <section >
                <div className="threeicons">
                <img style={{gridColumn:2}} src='https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg' alt="slide" />
                <img style={{gridColumn:3}} src='https://upload.wikimedia.org/wikipedia/commons/8/87/Windows_logo_-_2021.svg' alt="slide"  />
                <img style={{gridColumn:4}} src='https://upload.wikimedia.org/wikipedia/commons/7/77/Rocky_Linux_logo.svg' alt="slide"  />
                </div>

                <div className="fouricons">
                <img style={{gridColumn:2}} src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' alt="slide"  />
                <img style={{gridColumn:3}} src='https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg' alt="slide"  />
                <img style={{gridColumn:4}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/480px-Python-logo-notext.svg.png' alt="slide"  />
                <img style={{gridColumn:5}} src='https://upload.wikimedia.org/wikipedia/commons/0/0d/C_Sharp_wordmark.svg' alt="slide"  />
                </div>

                <div className="fouricons">
                <img style={{gridColumn:2}} src='https://upload.wikimedia.org/wikipedia/commons/9/97/Sqlite-square-icon.svg' alt="slide"  />
                <img style={{gridColumn:3}} src='https://upload.wikimedia.org/wikipedia/de/8/8c/Microsoft_SQL_Server_Logo.svg' alt="slide"  />
                <img style={{gridColumn:4}} src='https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg' alt="slide"  />
                <img style={{gridColumn:5}} src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*doAg1_fMQKWFoub-6gwUiQ.png' alt="slide"  />
                </div>

                <div className="threeicons">
                <img style={{gridColumn:2}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/800px-GitHub_Invertocat_Logo.svg.png' alt="slide"  />
                <img style={{gridColumn:3}} src='https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png' alt="slide"  />
                <img style={{gridColumn:4}} src='https://www.svgrepo.com/show/354202/postman-icon.svg' alt="slide"  />
                </div>

            </section>
        </div>
    );
};
