// import React, { Component } from 'react'
// import NewsItem from './NewsItem';
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";



// export class News extends Component {
//   static defaultProps = {
//     category: "general"
//   }
//   static propTypes = {
//     category: PropTypes.string
//   }
// constructor()
// {
//   super();
//   this.state = {
//     articles: [],
//     loading: false,
//     page: 1
//   }
// }
// async componentDidMount(){
//   this.props.setProgress(0);
//   let url = `https://newsapi.org/v2/top-headlines?country=in&q=${this.props.category}&apiKey=87e7ae990e274def84264d92cec71a7a&pageSize=6&page=1`;
//   this.setState({
//     loading: true
//   })
//   let data = await fetch(url);
//   this.props.setProgress(30);
//   let parsed = await data.json();
//   this.props.setProgress(70);
//   this.setState({
//     articles: parsed.articles, 
//     loading: false,
//     totalResults: 0
//   })
//   this.props.setProgress(100);
// }
// fetchMoreData = async () => {
//   this.setState({page: this.state.page + 1})
//   const url = `https://newsapi.org/v2/top-headlines?country=in&q=${this.props.category}&apiKey=87e7ae990e274def84264d92cec71a7a&pageSize=6&page=${this.state.page + 1}`;
//   this.setState({ loading: true });
//   let data = await fetch(url);
//   let parsedData = await data.json()
//   this.setState({
//   articles: this.state.articles.concat(parsedData.articles),
//   totalResults: parsedData.totalResults,
//   loading: false
//   })
// };


// render() {
    
//     return (
//       <div className='container my-3'>
//         <h1 className="text-center" style={{marginTop: 20, marginBottom: 40}} >NewsMonkey - Top Headlines</h1>
//         {/* {this.state.loading && <Spinner/>} */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length!==this.state.totalResults}
//           loader={<Spinner/>}
//         >
//           <div className="container">
//         <div className="row">
//           {this.state.articles.map((element)=>{
//             return <div className="col-md-4" key={element.url}>
//                 <NewsItem title={element.title?element.title.slice(0,44):""} author={element.author?element.author:"Anonymous"} date={element.publishedAt?element.publishedAt:"2023-08-3T10:35:56Z"} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/news/1024/cpsprodpb/10575/production/_130333966_p0fzxfm9.jpg"} newsUrl={element.url}/>
//                 </div>
//           })}
//         </div>
//         </div>
//         </InfiniteScroll>
        
//       </div>
//     )
//   }
// }

// export default News



import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalise = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&q=${props.category}&apiKey=87e7ae990e274def84264d92cec71a7a&pageSize=6&page=1}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    // setPage(2)
    setTotalResults(parsedData.totalResults);
    setLoading(false)
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&q=${props.category}&apiKey=87e7ae990e274def84264d92cec71a7a&pageSize=6&page=${page+1}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    // setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="text-center" style={{ marginTop: 110, marginBottom: 40 }}>
          NewsMonkey - Top Headlines
        </h1>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 44) : ''}
                    author={element.author ? element.author : 'Anonymous'}
                    date={element.publishedAt ? element.publishedAt : '2023-08-3T10:35:56Z'}
                    description={element.description ? element.description.slice(0, 90) : ''}
                    imageUrl={element.urlToImage ? element.urlToImage : 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/10575/production/_130333966_p0fzxfm9.jpg'}
                    newsUrl={element.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  category: 'general',
};

News.propTypes = {
  category: PropTypes.string,
};

export default News;
