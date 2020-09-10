import React, {Component} from 'react';
import Button from '../Buttons/Button';
import './Developer.css';
import axios from 'axios';
import Card from './Card';


class Developers extends Component{
  state={
    developer:[],
    // hover: false
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/items`)
    .then(res => {
      const developer = res.data;
      this.setState({ developer });
    })
  }

  // mouseChange=()=>{
  //   this.setState({
  //     hover: true
  //   })
  // }

  render(){

    return(
      <div style={{marginTop:"50px"}}>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <div style={{marginLeft:"50px"}}>
            <div style={{fontWeight:"500", fontSize:"40px"}}>Featured Developers</div>
            <div style={{fontSize:"20px", fontWeight:"500px"}}>Prominent developers in bangalore</div>
          </div>
          <div style={{marginRight:"210px"}}>
            <Button />
          </div>
        </div>
        <div style={{display:"flex", flexWrap:"wrap"}}>
          {
            this.state.developer.map((developer)=>(
              <Card setstate={this.setState} {...developer} key={developer.id}/>
            ))
            
          }
        </div>
    </div>
    )
  }

}


export default Developers;