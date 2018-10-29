import React, { Component } from 'react'
import TdsReactTable from './TdsReactTable';




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