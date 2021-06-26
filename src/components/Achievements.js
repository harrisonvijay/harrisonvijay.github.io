import data from "../resources/data";

const Achievements = () => {
    return (
        <>
            <h1 className="section-header">Programming Achievements</h1>
            <div className="section">
                {data.programming_achievements.map((ach, index) => (
                    <div className="card" key={index}>
                        <p className="title">{ach.title}</p>
                        {ach.description && <p className="subtext">{ach.description}</p>}
                        {ach.date && <p className="dates">{ach.date}</p>}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Achievements;