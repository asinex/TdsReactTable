import React, { Component } from 'react'

class ExportColumns extends Component {

    constructor(props){
        super(props);
    }

    static deleteRow(id){
        alert("deleting the record with id :"+id)
    }

    static showMessage(data){
        alert("showing the message :"+JSON.stringify(data))
    }

    
    static columnsArray(){
        return [
            
            {
                Header:"User ID",
                accessor:"userId",
                filterable:true,
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
                accessor:"id",
                filterable:true,
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
                accessor:"title",
                sortable:false,
                filterable:false,
                show:true
            },
            {
                Header:"Body",
                accessor:"body",
                sortable:false,
                filterable:false,
                show:true
            }
            // {
            //     Header:"Delete",

            //     Cell:props =>{
            //         return(
            //             <button style={{backgroundColor:"red" , color:"white"}}
            //                 onClick={() =>{
            //                     // console.log(props.original.id)
            //                     this.deleteRow(props.original.id);
            //                 }}
            //             >Delete</button>
            //         )
            //     },
            //     sortable:false,
            //     filterable:false,
                
            //     width:100,
            //     maxWidth:100,
            //     minWidth:100
            // },
            // {
            //     Header:"View",
            //     Cell:props =>{
            //         return(
            //             <button style={{backgroundColor:"green" , color:"white"}}
            //                 onClick={() =>{
            //                     this.showMessage(props.original);
            //                 }}
            //             >View</button>
            //         )
            //     },
            //     sortable:false,
            //     filterable:false,
                
            //     width:100,
            //     maxWidth:100,
            //     minWidth:100
            // }
        
        ]
    }

    render() {

        return (
        <div>
            
        </div>
        )
    }
}

export default ExportColumns;