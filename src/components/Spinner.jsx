import {Component} from 'react';
import loading from './loading.gif';
export default class Spinner extends Component{
    render(){
        return(
            <div className = 'text-center' >
                <img style = {{width : '5%', height : 'auto', margin : '3px'}} src={loading} alt="loading" />
            </div>
        )
    }
}