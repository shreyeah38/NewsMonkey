import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,newsUrl,author,date} =  props;
    return (
      <div>
            <span style={{ right:0}} class="badge rounded-pill text-bg-danger">{author}</span>
            <div className="card" style={{ marginBottom: 18}}>
            <img src={imageUrl} className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>

                <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
            </div>
            </div>
      </div>
    )
  }

export default NewsItem