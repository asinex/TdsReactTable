import React, { Component } from 'react';
import ReactTable from 'react-table';
import * as css from 'react-table/react-table.css';
import jquery from 'jquery';
import ToggleFilter1 from './ToggleFilter1';
import ColumnChooserMenu1 from './ColumnChooserMenu1';
import ColumnChooser from 'tds-reactcolumnchooser';
import styled from 'styled-components';
// import MyWidget from './MyWidget';
import DynamicColumnContextMenuUtil from './DynamicColumnContextMenuUtil';

const StyledCBContainer = styled.div`
  background-color:white;
  border:0.5px solid grey;
  color:black;
  font-weight:bold;
  font-style:italic;
  z-index:9999;
  width:auto;
  top:10px;
  left:30px;
  height:auto;
  position:absolute;
  padding:7px;
`;

const StyledContainerGrid = styled.div`

.rt-th{
  background-color:silver;

}
.rt-tr:focus{
  box-shadow:inset 0 0 0 .125rem #6da003;
  outline:none;
}

.rt-th:hover{
  // background-color:#edf0f4;
}

.ReactTable .rt-thead.-filters input{
  border:1px solid grey;
}

.ReactTable{
  border:1px solid grey;
}

.rt-resizable-header-content{
  // background-color:grey;
  // color:white;
  // font-weight:bold;
  // font:Arial;
}

.ReactTable .rt-tbody .rt-td{
  border-right:1px solid grey;
  border-bottom:0.02px solid grey;
}

.rt-resizable-header-content{
  // background-color:white;
  color:black;
  font-weight:bold;
  font:Arial;
}
`;


class TdsReactTable extends Component {
  constructor(props){
    super(props);
    this.state={
      showColumnChooser:false,
      columnsFinalized:[],
      originalMutatedColumns:[],
      showMenuIcon:false,
      loading:this.props.loading,
      toggleFilter:this.props.toggleFilter,


    };
  }

  toggleColumnChooser(){
    this.setState({showColumnChooser:!this.state.showColumnChooser});
  }

  handleToggleFilter(){
    this.setState({toggleFilter:!this.state.toggleFilter})
  }

  initializeGrid(){
    const columnsFinalized=[];
    const columns = this.props.columns;
    columns.map(function(data,index){
      const checkbox = DynamicColumnContextMenuUtil.addColumnSelector(data["HeaderValue"]);
      const columnObjAttachedToCheckBoxObj = Object.assign({} , data , checkbox[0]);
      columnsFinalized.push(columnObjAttachedToCheckBoxObj);
    });
    this.setState({columnsFinalized,originalMutatedColumns:columnsFinalized});
  }

  hideColumnChooser(){
    jquery(document).mouseup(function(e){
      var container = jquery(".menuPopup");
      if(!container.is(e.target) && container.has(e.target).length === 0)
          container.hide();
    });
  }

  hideLoadingMessage(){
    this.setState({loading:!this.state.loading})
  }
  componentWillMount(){

  }

  componentDidMount(){
    this.initializeGrid();
    this.hideColumnChooser();
    this.hideLoadingMessage();
  }
  render() {
    
    return (
      <div>
        {/* <div>
          <MyWidget 
          filterItem={
            <ToggleFilter1 onClick={this.setState.bind(this)} toggleFilter={this.state.toggleFilter} />
          }
          item={
              <ColumnChooser onChange={this.setState.bind(this)} columnsFinalized={this.state.columnsFinalized}/>
              // <ColumnChooser onChange={this.setState.bind(this)} columnsFinalized={this.state.columnsFinalized} columns={this.props.columns}/>
          }
          />
        </div> */}
      <div  style={{border:"1px solid black"}}>
        {
          this.props.showColumnChooser ?
          <ColumnChooserMenu1 onClick={this.setState.bind(this)} showColumnChooser={this.state.showColumnChooser}/>
          :null
        }
        {
          this.props.showFilterToggler ?
          <ToggleFilter1 onClick={this.setState.bind(this)} toggleFilter={this.state.toggleFilter} />
          : null
        }
        {this.state.showColumnChooser ?
            <div className="menuPopup">
            <StyledCBContainer>
            {/* <ColumnChooser onChange={this.setState.bind(this)} columnsFinalized={this.state.columnsFinalized} columns={this.props.columns}/> */}
              <ColumnChooser onChange={this.setState.bind(this)} columnsFinalized={this.state.columnsFinalized}/>
            </StyledCBContainer>
            </div>
          :null
        }
      </div>
        <div>
        <ReactTable
                  className={this.props.stripedStyle}
                  data={this.props.data}
                  columns={this.state.columnsFinalized}
                  resizable={this.props.resizable}
                  noDataText={this.props.noDataText}
                  minRows={this.props.minRows}
                  showPagination={this.props.showPagination}
                  loading={this.state.loading}
                  filterable={this.state.toggleFilter}
                  defaultPageSize={this.state.defaultPageSize}
                  loadingText={this.props.loadingText}
                  sortable={this.props.sortable}
        />
        </div>
      </div>
    )
  }
}

TdsReactTable.defaultProps={
  toggleFilter:false,
  showPagination:true,
  loading:true,
  minRows:3,
  noDataText:"No items to show",
  loadingText:"Loading Data....",
  resizable:true,
  showFilterToggler:true,
  showColumnChooser:true,
  sortable:true,
  stripedStyle:"-striped -highlight",
  defaultPageSize:10
}
export default TdsReactTable;