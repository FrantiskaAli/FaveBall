function HomePageCard({ title,infoName,info,infoName2,info2,link}) {
    return (
        <div className="card homepagecard p-3">
            <div className="card-body">
                <h5 className="card-title-info text-center">{title}</h5>
                <ul className="list-group list-group-flush text-center">
                    <li className="list-group-item lihp">{infoName}<br/> <span className="information">{info}</span></li>
                    <li className="list-group-item lihp">{infoName2}<br/> <span className="information">{info2}</span></li>
                    <li className="list-group-item lihp mt-2">{link}</li>
                </ul>
            </div>
        </div>
    )
}
export default HomePageCard
