import data from "../resources/data";

const Skills = () => {
    return (
        <>
            <h1 className="section-header">Skills & Technologies</h1>
            {data.skills.map((skill, index) => (
                <div key={index} >
                    <h2 className="section-subheader">{skill.title}</h2>
                    <div className="section">
                        {skill.list.map((item, idx) => (
                            <div className="card" key={idx}>
                                {!item.main && <p className="title">{item}</p>}
                                {item.main && (
                                    <>
                                        <p className="title">{item.main}</p>
                                        {/* {item.sub && item.sub.map((subitem, idx) => <p className="highlight" key={idx}>{subitem}</p>)} */}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))
            }
        </>
    )
}

export default Skills;