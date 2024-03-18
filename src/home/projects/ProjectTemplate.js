import './Projects.css'
export default function ProjectTemplate(props) {
    const { title, details, resources, imageSource } = props;
    return (
        <div id="projects">
            <section>
                <h1>{title}</h1>
                <p>{details}</p>
                <ul>
                    {
                        resources.map((resorce, index) => <li key={index}>
                            <p style={{ color: "yellow" }}>{resorce["field"]}:
                            </p> <p>{resorce["values"]}</p></li>)
                    }
                </ul>
                <img src={imageSource} width="100%" />
            </section>

        </div>
    );
}