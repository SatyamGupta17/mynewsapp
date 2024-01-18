import { Component } from "react";
import NewItems from "./NewItems";
import Spinner from "./Spinner";
import PropTypes from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component{
    static defaultProps = {
        country : 'in',
        pageSize : 5,
        category : 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize : PropTypes.number,
        category: PropTypes.string,
    }
    capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        console.log("I am constructor from News Component");
        this.state = {
            articles : [],
            loading : true,
            page : 1,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - My New App`;
    }
    getUpdate = async() =>{
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.props.setProgress(30);
        this.setState({
            loading:true
        })
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.props.setProgress(80);
        this.setState({
            articles: parseData.articles, 
            totalResults : parseData.totalResults,
            loading : false, 
        })
        this.props.setProgress(100);
    }
    componentDidMount = async() => {
        this.getUpdate();
    }
    fetchMoreData = async() => {
        this.setState({page : this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=450fa29ccbcd4833bbf82be4f1d8865b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading:false
        })
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: this.state.articles.concat(parseData.articles), 
            totalResults : parseData.totalResults,
            loading : false, 
        })
    }
    handlePrevClick = async() =>{
        console.log(this.state.page)
        console.log(this.state.totalResults/this.props.pageSize);
        this.setState ({page : this.state.page - 1})
        this.getUpdate();
    }
    handleNextClick = async () =>{
        this.setState ({page : this.state.page + 1});
        console.log(this.state.totalResults/this.props.pageSize);
        this.getUpdate();
    }
    render(){
        return(
            <>
                <h1 className = 'text-center' style = {{margin :'35px 0px'}}>MyNewApp - Top Headlines  </h1>
                <InfiniteScroll 
                dataLength = {this.state.articles.length}
                next = {this.fetchMoreData}
                hasMore = {this.state.articles.length !== this.state.totalResults}
                loader = {<Spinner/>} >
                {/* {this.state.loading &&<Spinner/>} */}
                <div className="container">

                <div className = "row">
                {!this.state.loading && this.state.articles?.map((element) => {
                    return <div className = "col-lg-4 col-md-6 col-sm-12">
                        <NewItems key = {element.url} title = {element.title} description = {element.description} imageURL ={element.urlToImage} newsURL = {element.url} author = {element.author} dated = {element.publishedAt} source = {element.source.name}/>
                    </div>
                })}
                </div>
                {/*<div className = "container d-flex justify-content-between">
                    <button disabled = {this.state.page <= 1}type="button" className="btn btn-outline-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled = {this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-outline-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>*/}
                </div>
            </InfiniteScroll>
            </>
        )
    }
}