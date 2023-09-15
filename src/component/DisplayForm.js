import { Component } from 'react'
import './style.css'
class DisplayForm extends Component{
    constructor(props){
        super(props)
        console.log(this.props.value);
    }
    render(){
        return(
        <>

        <div className='dis-data'>
        {this.props.value.map((item,index)=>{
            return(
                <div className='child'>
                <span key={index} style={{fontWeight:"bold"}}>Name: {item.name} |</span>
                <span key={index} style={{fontWeight:"bold"}}>Department: {item.dept} |</span>
                <span key={index} style={{fontWeight:"bold"}}>Rating: {item.Rating}</span>
                </div>
                )
                })}

        </div>
        <button  className="go-back-btn" onClick={this.props.toggleFunc}>Go Back</button>
        </>
        )
    }
}
export default DisplayForm