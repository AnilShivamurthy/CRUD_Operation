import React, {Component} from 'react';
import Button from '../Buttons/Button'
import axios from 'axios';
import {withRouter} from 'react-router-dom'



class FeaturedDevelopers extends Component{
    
    state={}

    componentDidMount(){
        const {match} =this.props;
        console.log(match.params.id)
        axios.get(`http://localhost:3000/items/${match.params.id}`).then((response)=>{
            this.setState({
               ...response.data
            })
        })
    }
 
    handleSubmit=(e)=>{
        const {match} =this.props
        e.preventDefault();
        if(match.params.id){
            axios.put(`http://localhost:3000/items/${match.params.id}`,this.state).then((response)=>{
                this.props.history.push("/")
            })
        }else{
            axios.post(`http://localhost:3000/items`,this.state).then((response)=>{
                this.props.history.push("/")
            })
        }
       
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value,
        })
    }


    


    render(){
        return(

        <div style={{marginLeft:"100px", marginTop:"10px", width:"27%", margin:"auto"}}>
            <form name="update" onSubmit={this.handleSubmit}>
            <div style={{fontWeight:"600px", fontSize:"30px", textAlign:"center"}}>Featured Developers</div>

            <div style={{marginLeft:"15px",  marginTop:"10px"}}>Developer Logo Image URL</div>
            <input required onChange={this.handleChange} value={this.state.logo} id="logo" type="text" style={{background:"lightgrey", width:"400px", height:"30px", borderRadius:"50px", marginTop:"5px", fontSize:"15px", paddingLeft:"5px"}}></input>

            <div style={{marginLeft:"15px", marginTop:"10px"}}>Developer Name</div>
            <input required onChange={this.handleChange} value={this.state.title} id="title" type="text" style={{background:"lightgrey", width:"400px", height:"30px", borderRadius:"50px", marginTop:"5px", fontSize:"15px", paddingLeft:"5px"}}></input>

            <div style={{marginLeft:"15px", marginTop:"10px"}}>Years of Experience</div>
            <input required onChange={this.handleChange} value={this.state.totalExp} id="totalExp" type="text" style={{background:"lightgrey", width:"400px", height:"30px", borderRadius:"50px", marginTop:"5px", fontSize:"15px", paddingLeft:"5px"}}></input>

            <div style={{marginLeft:"15px", marginTop:"10px"}}>Projects Count</div>
            <input required  onChange={this.handleChange} value={this.state.totalProjects} id="totalProjects" type="text" style={{background:"lightgrey", width:"400px", height:"30px", borderRadius:"50px", marginTop:"5px", fontSize:"15px", paddingLeft:"5px"}}></input>

            <div style={{marginLeft:"15px", marginTop:"10px"}}>Description</div>
            <input required  onChange={this.handleChange} value={this.state.desc} id="desc" type="text" style={{background:"lightgrey", width:"400px", height:"80px", borderRadius:"15px", marginTop:"5px", fontSize:"15px", paddingLeft:"5px"}}></input>

            <div style={{marginLeft:"15px", marginTop:"10px"}}>Project Name</div>
            <input required  onChange={this.handleChange} value={this.state.imgTitle} id="imgTitle" type="text" style={{background:"lightgrey", width:"400px", height:"30px", borderRadius:"50px", marginTop:"5px", fontSize:"15px", paddingLeft:"5px"}}></input>

            <div style={{marginLeft:"15px", marginTop:"10px"}}>Project Location</div>
            <input required  onChange={this.handleChange} value={this.state.location} id="location" type="text" style={{background:"lightgrey", width:"400px", height:"30px", borderRadius:"50px", marginTop:"5px",fontSize:"15px", paddingLeft:"5px"}}></input>

            <div style={{marginLeft:"15px", marginTop:"10px"}}>Project Image URL</div>
            <input required  onChange={this.handleChange} value={this.state.imgURL} id="imgURL" type="text" style={{background:"lightgrey", width:"400px", height:"30px", borderRadius:"50px", marginTop:"5px", fontSize:"15px", paddingLeft:"5px"}}></input>
            
            <div>
            <button type="submit" style={{display:"block", marginLeft:"50px", width:"300px", height:"40px", borderRadius:"50px", color:"white", backgroundColor:"rgb(61, 61, 180)", border:"1px solid rgb(61, 61, 180)", marginTop:"15px", fontSize:"20px", fontWeight:"500"}}>UPDATE</button>
            </div>
            </form>
        </div>  
        )
    }
}

export default withRouter(FeaturedDevelopers);