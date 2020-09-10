import React from 'react'
import './Card.css';
import axios from 'axios';
import {withRouter} from 'react-router-dom'




const Card=({logo, imgURL, imgTitle, title, totalExp, totalProjects, desc, location, id, setState, history})=>{

   const handleDelete=()=>{
        axios.delete(`http://localhost:3000/items/${id}`).then(()=>{
            axios.get(`http://localhost:3000/items`)
            .then(res => {
            const developer = res.data;
               setState({ developer });
            })
        })
    }

    const handleEdit=()=>{
        history.push(`/edit-developer/${id}`)
    }

    return(
        <div>
            <div className="card" style={{marginLeft:"50px", padding:"20px", borderRadius:"5px", borderTop:"5px solid rgb(61, 61, 180)", borderLeft:"1px solid grey", borderBottom:"1px solid grey", borderRight:"1px solid grey", width:"350px", height:"500px",}}>
            <div style={{display:"flex"}}>

                <div style={{width:"90px", height:"90px", textAlign:"center", border:"1px solid grey"}}>
                    <img style={{width:"90px", height:"90px"}} src={logo} />  
                </div>

                <div style={{marginLeft:"30px"}} >
                    <div style={{fontSize:"20px", fontWeight:"bold", whiteSpace:"nowrap", textOverflow:"ellipsis"}}>{title}</div>
                    <div style={{display:"flex", justifyContent:"space-around", marginTop:"20px"}}>
                        <div>
                            <div style={{fontSize:"18px", fontWeight:"bold"}}>{totalExp}</div>
                            <div>Years Exp</div>
                        </div>
                        <div>
                            <div style={{fontSize:"18px", fontWeight:"bold"}}>{totalProjects}</div>
                            <div>Total</div>
                        </div>
                    </div> 
                </div>

            </div>

            <div style={{width:"350px", height:"45px", overflow:"hidden", textOverflow:"ellipsis", marginTop:"20px"}}>{desc}</div>
            
            <a href="#" style={{marginTop:"30px", display:"block", fontSize:"18px", fontWeight:"bold", color:"blue"}}>{imgTitle}</a>
            
            <div className="image-tile" style={{backgroundImage:`url(${imgURL})`}}>
                <div style={{color:"white", fontSize:"18px", fontWeight:"bold", paddingTop:"180px", paddingLeft:"20px"}}>{imgTitle}</div>
                <div style={{color:"white", fontSize:"16px", fontWeight:"bold", paddingLeft:"20px" }}>Bangalore</div>
            </div>
            
             <div className="change">
                 <button className="buttons" onClick={handleEdit}>Edit</button><br/>
                 <button className="buttons" onClick={handleDelete}>Delete</button>
             </div>
            
            </div>  
        </div>      
    )
}


export default withRouter(Card);