import data from "../resources/data";
const Projects = () => {

    return (
        <>
            <h1 className="section-header">Projects</h1>
            <div className="section">
                {data.projects.map((project, index) => (
                    <div className="card" key={index}>
                        <p className="title">{project.title}</p>
                        {project.description.map((desc, idx) => <p className="subtext" key={idx}>{desc}</p>)}
                        <div className="tag-container">{project.tools.map((tool, idx) => <p className="tag" key={idx}>{tool}</p>)}</div>
                        <div className="link-section">
                            {project.github && <a target="_blank" rel="noreferrer" href={project.github}>View Github Repo</a>}
                            {project.check_out && <a target="_blank" rel="noreferrer" href={project.check_out}>Check it out live</a>}
                        </div>
                        {project.check_out_msg && <p className="highlight">Check it out live: {project.check_out_msg}</p>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Projects;