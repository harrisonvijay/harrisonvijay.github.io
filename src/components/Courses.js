import data from "../resources/data";

const Courses = () => {
    return (
        <>
            <h1 className="section-header">Courses & Certifications</h1>
            <div className="section">
                {data.courses.map((course, index) => (
                    <div className="card" key={index}>
                        <p className="title">{course.title}</p>
                        <p className="provider">{course.provider}</p>
                        {course.description && course.description.map((desc, idx) => <p className="subtext" key={idx}>{desc}</p>)}
                        <div className="link-section">
                            {course.certificate_link && <a href={course.certificate_link} rel="noreferrer" target="_blank">View Certificate</a>}
                            {course.certificate && <a href={require("../resources/" + course.certificate).default} rel="noreferrer" target="_blank">View Certificate</a>}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Courses;