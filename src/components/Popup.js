import React, { Component } from 'react'
import styled from 'styled-components';
import Util from './Util';
 
const StyledContainer = styled.div`
.popup {
    position: fixed;
    width: auto;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
    z-index: 9999;
    background:transparent
  }
  .popup_inner {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background:grey;
    z-index: 9999;
  }
`;

class Popup extends Component {
        constructor(props){
            super(props);
            this.state={
                columnVisible:true,
                columnToggledArray:[]
            }
}
    
  render() {
    const columnsArray = this.props.columns;
               
    const columns = columnsArray.map(function(o,index){
        return (
            <div>
            <input type="checkbox" key={index} checked={true}  value={o['Header']} />{o['Header']}
            </div>
        );
    })

    const columns1 =  columnsArray.map(function(o,index){
        return (
            <div key={index}>
                <input
                    type="checkbox"
                    checked={true}
                    name={o['Header']}
                    onChange={(event) => {
                        const target = event.target;
                        const value = target.type === 'checkbox' ? target.checked : target.value;
                        const name = target.name;
                        this.setState({
                        [name]: value
                        });
                        Util.handleInputChange1(o['Header'],event.target)}

                    }
                        
                        
                        
                    // onChange={(event) => {console.log(o['Header'])}}

                />{o['Header']}
             </div>
        );
        
    })
    
   
    return (
      <StyledContainer>
          <div className='popup'>
            <div className='popup_inner'>
            <h5>{this.props.text}</h5>
            {columns1}
            <button style={{color:"white" , backgroundColor:"red"}} onClick={this.props.closePopup}>X</button>
            </div>
        </div>
      </StyledContainer>
    )
  }
}

export default Popup;