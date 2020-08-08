import React from 'react';


const AboutMeProfileBlock = (props) => {
    
   return(
       <div className='aboutBlock'>
            <ProfileStatusEdited setStatus={props.setStatus} status={props.status} />
           <div>Обо мне:{props.about}</div> 
           <div>Ищу работу:  { props.job === true ? 'Да':'Нет' } </div>
           <div>О работе: {props.lookingForAJobDescription} </div>
       </div>
   )
}

export default AboutMeProfileBlock;

class ProfileStatusEdited extends React.Component {

    SwitchEditMode = (bool)=>{
        this.setState({editMode:bool})
    }

    state={
        editMode:false,      
        editedStatus:this.props.status
    }

    editStatus=(newvalue)=>{       
        this.setState({'editedStatus':newvalue})  
          
    }

    submitStatus= (newStatus)=>{
        if (newStatus===this.props.status) {return;}
        this.props.setStatus(newStatus)
    }

    render(){

    if (this.state.editMode===false) { return <div onClick={()=>{this.SwitchEditMode(true)}} >Статус:{this.props.status}</div>
        }

        let inputStatus = React.createRef();

        return(
           <div onBlur={()=>{this.submitStatus(this.state.editedStatus); this.SwitchEditMode(false)  }} className='ProfileStatusEdited' > 
           Статус:<input  autoFocus={true} ref={inputStatus} onChange={()=>{ this.editStatus(inputStatus.current.value)  }}  value={this.state.editedStatus}  /> 
           </div>
           
        )
    }
}
