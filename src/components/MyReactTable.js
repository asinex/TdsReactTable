import React, { Component } from 'react'
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Columns from './Columns';
import ExportColumns from './ExportColumns';
import SimpleMenu from './SimpleMenu';
import jquery from 'jquery';
import styled from 'styled-components';
import DynamicCheckBoxes from './DynamicCheckBoxes';
import Popup from './Popup';

const StyledContainer = styled.div`
.rt-resizable-header-content{
  background-color:black;
  color:white;
}
`;

const StyledCBContainer = styled.div`
    background:grey;
    z-index: 9999;
`;
//---------------------------------------------------------------------COLUMN TOGGLING------------

function addCheckbox() {
  const {checkboxes} = this.state,
      label = this.refs.label.value;

  checkboxes.push({
      checked: true,
      label
  });

  this.setState({
      checkboxes
  });
}

function toggleCheckbox(index) {
  console.log("toggling the checkbox.."+index)

  const {checkboxes} = this.state;

  checkboxes[index].checked = !checkboxes[index].checked;
  //remove the column if unchecked
  // checkboxes.splice(index,1);
  //------------------------------
  this.setState({
      checkboxes:checkboxes,
      updatedCheckBoxes:checkboxes
  });
  
}

function renderCheckboxes() {
  const {checkboxes, filter} = this.state;
  // console.log("renderCheckboxes-->"+JSON.stringify(checkboxes))
  return checkboxes
      .filter(checkbox =>
          filter === 'ALL' ||
          filter === 'CHECKED' && checkbox.checked ||
          filter === 'UNCHECKED' && !checkbox.checked
      )
      .map((checkbox, index) =>
          <div key={index}>
              <label>
                  <input
                      type="checkbox"
                      checked={checkbox.checked}
                      onChange={toggleCheckbox.bind(this, index)}
                  />
                  {checkbox.label}
              </label>
          </div>
      );
      
}

function updateFilter(filter) {
  this.setState({
      filter
  });
  
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////
class MyReactTable extends Component {

  constructor(props){
    super(props);
    this.state = {
      posts:[] , 
      showPopup: false , 
      showPopup1: false,
      showPopup2: false,
      checkboxes: [],
      originalMutatedColumns:[],
      updatedCheckBoxes:[],
      filter: 'ALL'
    };

    this.deleteRow = this.deleteRow.bind(this);
  }



  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  togglePopup1() {
    
    this.setState({
      showPopup1: !this.state.showPopup1
    });
    
  }

  togglePopup2() {
    this.setState({
      showPopup2: !this.state.showPopup2
    });
    
  }

  toggleColumns(){
    // console.log()
  }
  getColumnObject(object1,object2){

     const newObject=  Object.assign({} , object1 , object2);
     return newObject;

  }
  componentWillMount(){
    // const colsArray = ExportColumns.columnsArray();
    const checkboxes = [];
    ExportColumns.columnsArray().map(function(data,index){
      const checkbox = DynamicCheckBoxes.addCheckbox(data['Header']);
      const columnObjAttachedToCheckBoxObj = Object.assign({} , data , checkbox[0]);
      // console.log("columnObjAttachedToCheckBoxObj"+JSON.stringify(columnObjAttachedToCheckBoxObj))
      checkboxes.push(columnObjAttachedToCheckBoxObj);
      // checkboxes.push(checkbox[0]);
    });
    this.setState({checkboxes , originalMutatedColumns:checkboxes});
    // this.setState({originalMutatedColumns:checkboxes});

  //   jquery(".rt-resizable-header-content").hover(function(){
  //     jquery(this).css("background-color", "yellow");
  //     }, function(){
  //     jquery(this).css("background-color", "pink");
  // });
  }

  componentDidMount(){
    const url  = "https://jsonplaceholder.typicode.com/posts";
    fetch(url,{
      method:"GET"
    }).then(response => response.json()).then(posts => {
      this.setState({posts});
    })
  }

  deleteRow(id){}
  showMessage(data){}

  

  render() {
    const colsArray = ExportColumns.columnsArray();
    const updatedColumns = this.state.checkboxes;
    
    // console.log(JSON.stringify(this.state.checkboxes))
    console.log(JSON.stringify(colsArray)+"--updated columns are :"+JSON.stringify(this.state.checkboxes))
    // console.log("this.state.checkboxes"+JSON.stringify(this.state.checkboxes))
    
    return (
      <StyledContainer>
        <div>
        <button onClick={this.togglePopup2.bind(this)}>Columns2</button>
        {this.state.showPopup2 ? 
            <StyledCBContainer>
             {renderCheckboxes.call(this)}
                
                { <input ref="label" type="text"/> }
                { <button onClick={addCheckbox.bind(this)}>Add Checkbox</button> }
                <div>
                    <h4>Filters ({this.state.filter})</h4>
                    <a href="#" onClick={updateFilter.bind(this, 'ALL')}>ALL</a>
                    &nbsp;|&nbsp;
                    <a href="#" onClick={updateFilter.bind(this, 'CHECKED')}>CHECKED</a>
                    &nbsp;|&nbsp;
                    <a href="#" onClick={updateFilter.bind(this, 'UNCHECKED')}>UNCHECKED</a>
                </div>
               </StyledCBContainer>
          : null
        }
        </div>
         <ReactTable 
                  // columns={colsArray}
                  columns={this.state.checkboxes}
                  data={this.state.posts}
                  defaultPageSize={10}
                  showPagination={true}
                  noDataText="No items to show"
                  className="-striped"
        >
        </ReactTable>
      </StyledContainer>
    )
  }
}


export default MyReactTable;