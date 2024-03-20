import './Projects.css'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function ProjectTemplate(props) {
    const { title, details, resources, imageSource, projectSelected, setProjectSelected } = props;
    const clickHandled = () => {
        setProjectSelected(title);
    }
    return (
        <div id="projects">
            <section >
                <div className='projectmenu'>
                    <h3>{title}</h3>
                    <Stack direction="row" spacing={2}>


                        {
                            projectSelected === title ?
                                <Button variant="outlined"
                                    sx={{ color: "#95ffe6" }}
                                    onClick={() => setProjectSelected("")}
                                    endIcon={<CloseFullscreenIcon />}>
                                    Click to Close
                                </Button>
                                :
                                <Button variant="outlined"
                                    sx={{ color: "#95ffe6" }}
                                    onClick={clickHandled}
                                    endIcon={<OpenInFullIcon />}>
                                    Click to Open
                                </Button>
                        }
                    </Stack>
                </div>
                {
                    projectSelected === title ?
                        <>
                            {details}
                            <ul>
                                {
                                    resources.map((resorce, index) => <li key={index}>
                                        <p style={{ color: "yellow" }}>{resorce["field"]}:
                                        </p> <p>{resorce["values"]}</p></li>)
                                }
                            </ul>
                            <img src={imageSource} width="100%" alt='projectImage' />
                            
                        </> : null
                }

            </section>

        </div>
    );
}