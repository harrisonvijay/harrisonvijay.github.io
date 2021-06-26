import data from "../resources/data";

const Experience = () => {
    return (
        <>
            <h1 className="section-header">Work Experience</h1>
            <div className="section">
                {data.experience.map((exp, index) => (
                    <div className="card" key={index}>
                        <div>
                            <img src={require("../resources/" + exp.logo).default} alt="company logo"></img>
                            <p className="title">{exp.title}</p>
                            <p className="institution">{`${exp.company}, ${exp.location}`}</p>
                            <p className="dates">{`${exp.start_date} - ${exp.end_date}`}</p>
                        </div>
                        {exp.description && <p className="subtext">{exp.description}</p>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Experience;