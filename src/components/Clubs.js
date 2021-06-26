import data from "../resources/data";

const Clubs = () => {
    return (
        <>
            <h1 className="section-header">Clubs</h1>
            <div className="section">
                {data.clubs.map((club, index) => (
                    <div className="card" key={index}>
                        <img src={require("../resources/" + club.logo).default} alt="club logo"></img>
                        <p className="title">{club.name}</p>
                        <p className="highlight">{club.role}</p>
                        {club.description && club.description.map((desc, idx) => <p className="subtext" key={idx}>{desc}</p>)}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Clubs;