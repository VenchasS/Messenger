import React, { useState } from 'react';


const AboutMeProfileBlock = (props) => {
    
   return(
       <div className='aboutBlock'>
            <ProfileStatusWithHook setStatus={props.setStatus} status={props.status} />
           <div>Обо мне:{props.about}</div> 
           <div>Ищу работу:  { props.job === true ? 'Да':'Нет' } </div>
           <div>О работе: {props.lookingForAJobDescription} </div>
       </div>
   )
}
 


// class ProfileStatusEdited extends React.Component {

//     SwitchEditMode = (bool)=>{
//         this.setState({editMode:bool})
//     }

//     state={
//         editMode:false,      
//         editedStatus:this.props.status
//     }

//     editStatus=(newvalue)=>{       
//         this.setState({'editedStatus':newvalue})  
          
//     }

//     submitStatus= (newStatus)=>{
//         if (newStatus===this.props.status) {return;}
//         this.props.setStatus(newStatus)
//     }

//     render(){

//     if (this.state.editMode===false) { return <div onClick={()=>{this.SwitchEditMode(true)}} >Статус:{this.props.status}</div>
//         }

//         let inputStatus = React.createRef();

//         return(
//            <div onBlur={()=>{this.submitStatus(this.state.editedStatus); this.SwitchEditMode(false)  }} className='ProfileStatusEdited' > 
//            Статус:<input  autoFocus={true} ref={inputStatus} onChange={()=>{ this.editStatus(inputStatus.current.value)  }}  value={this.state.editedStatus}  /> 
//            </div>
           
//         )
//     }
// }

const ProfileStatusWithHook = (props)=>{

    let [editMode,switchEditMode] = useState(false);

    let [editedStatus,setEditedStatus] = useState(props.status);

    let submitStatus= (newStatus)=>{
        if (newStatus=== props.status) {return;}
        props.setStatus(newStatus)
    }

    if (editMode===false) { return <div onClick={()=>{switchEditMode(true)}} >Статус:{props.status}</div>
        }

        


    return(

        <div onBlur={()=>{submitStatus(editedStatus); switchEditMode(false)  }} className='ProfileStatusEdited' > 
        Статус:<input  autoFocus={true}  onChange={(e)=>{ setEditedStatus(e.target.value)  }}  value={editedStatus}  /> 
        </div>
        
    )
}
export default AboutMeProfileBlock;
