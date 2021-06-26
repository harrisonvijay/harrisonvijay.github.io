import data from "../resources/data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    const details = data.personal_details;
    return (
        <>
            <h1>About Me</h1>
            <div className="card personal">

                <img className="profile-img" src={require("../resources/" + details.picture).default} alt="profile pic"></img>
                <h1 className="name">{details.name}</h1>
                <div className="tag-container">
                    {details.highlights.map((highlight, idx) => <p className="tag" key={idx}>{highlight}</p>)}
                </div>
                <div className="description-section">
                    {details.description.map((desc, idx) => <p className="description" key={idx}>{desc}</p>)}
                </div>
                <div className="contact-links">
                    <a className="link" href={details.github} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="icon" size="2x" icon={faGithub} />
                        <p>{details.github_short}</p>
                    </a>
                    <a className="link" href={details.linkedin} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon className="icon" size="2x" icon={faLinkedin} />
                        <p>{details.linkedin_short}</p>
                    </a>
                    <a className="link" href={`mailto: ${details.email}`}>
                        <FontAwesomeIcon className="icon" size="2x" icon={faAt} />
                        <p>{details.email}</p>
                    </a>
                    <div className="link">
                        <FontAwesomeIcon className="icon" size="2x" icon={faMapMarkerAlt} />
                        <p>{details.location}</p>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Home;