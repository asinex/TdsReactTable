import React, { Component } from 'react'
// import TdsReactTable from './TdsReactTable';
import styled from 'styled-components';
import TdsReactTable from 'tds-reacttablewrapper';

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


class App extends Component {

    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        const url  = "https://jsonplaceholder.typicode.com/posts";
            fetch(url,{
            method:"GET"
            }).then(response => response.json()).then(posts => {
            this.setState({posts});
            })
        }
    

    render() {
        const columns = [
            {

            Header:"User ID",
            HeaderValue:"User ID",
            accessor:"userId",
            // filterable:true,
            style:{
                textAlign:"center",
            },
            width:100,
            maxWidth:100,
            minWidth:100,
            show:true
        },
        {
            Header:"ID",
            HeaderValue:"ID",
            accessor:"id",
            // filterable:true,
            style:{
                textAlign:"center"
            },
            width:100,
            maxWidth:100,
            minWidth:100,
            show:true
        },
        {
            Header:"Title",
            HeaderValue:"Title",
            accessor:"title",
            sortable:false,
            // filterable:true,
            show:true
        },
        {
            Header:"Body",
            HeaderValue:"Body",
            accessor:"body",
            sortable:false,
            // filterable:true,
            show:true
        }
    ]
        return (
        <div>
            <TdsReactTable
                            columns={columns}
                            data={this.state.posts}
                            // showFilterToggler={false}
                            // showColumnChooser={false}
            />
            
        </div>
        )
    }
}


export default App;