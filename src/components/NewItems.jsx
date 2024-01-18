import { Component } from "react";
export default class NewItems extends Component{
    // constructor(){
    //     super();
    //     console.log("I am constructor")
    // }

    render(){
        let {title, description, imageURL, newsURL, author, dated, source} = this.props;
        return(
            <div className = "my-3">
                <div className="card">
                <img src={!imageURL?"https://www.livemint.com/lm-img/img/2023/12/16/1600x900/3-0-13258528-istockphoto-1062473882-2048x2048-0_1679832310043_1702700629861.jpg":imageURL}className="card-img-top" alt="..."/>
                <div className="card-body">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style = {{left: '90%', zIndex: '1'}}>{source}
  </span>
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-danger">By {!author?"Unknown":author} on {new Date(dated).toGMTString()}</small></p>
                    <a rel = "noreferrer" href= {newsURL} target = "_blank" className="btn btn-sm btn-dark">Read more</a>
                </div>
                </div>
            </div>
        )
    }
}