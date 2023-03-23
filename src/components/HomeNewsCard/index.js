function HomeNewsCard({url,title,snippet,articleLink}){
    return(
      
      <div className="d-flex homepageNewscard col-lg-4 col-md-6 col-sm-10 pt-5"> 
        <div className="thumbnail">
      <img src={url} height="80px" width="80px" className="img-fluid rounded align-self-start" alt="article's thumbnail"/>
        </div>
        <div className="articlecontent align-self-center text-center mx-2">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{snippet}</p>
        </div>
        <div className="stay align-self-start mx-2">
        <a href={articleLink} className="buttonNews">Read</a>
        </div>
        </div>
    
      )

}
export default HomeNewsCard


