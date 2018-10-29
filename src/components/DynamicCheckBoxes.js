import React, { Component } from 'react'
import styled from 'styled-components'
import MyReactTable from './MyReactTable';


const StyledContainer = styled.div`
    background:grey;
    z-index: 9999;
`;
// function addCheckbox() {

//     const {checkboxes} = this.state,
//         label = this.refs.label.value;

//     checkboxes.push({
//         checked: true,
//         label
//     });

//     this.setState({
//         checkboxes
//     });
// }

function toggleCheckbox(index) {
    const {checkboxes} = this.state;

    checkboxes[index].checked = !checkboxes[index].checked;

    this.setState({
        checkboxes
    });
}

function renderCheckboxes() {
    const {checkboxes, filter} = this.state;
    
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

class DynamicCheckBoxes extends Component {
    constructor(props) {
        super(props);
        console.log("this.props.columns"+JSON.stringify(this.props.columns))
        const checkboxes = this.props.columns?this.props.columns:[];
        this.state = {
            // checkboxes: [],
            checkboxes:checkboxes,
            filter: 'ALL'
        };

    }


    static addCheckbox(ip) {
        // console.log("ip...................."+ip+"-")
        // const {checkboxes} = this.state,
        //     label = ip;
    
        const checkboxes = [];
        const label = ip;
        checkboxes.push({
            checked: true,
            label:ip
        });
    
        // this.setState({
        //     checkboxes:checkboxes
        // });
        return checkboxes;
    };


    render() {
        
        return (
            <StyledContainer>
                {renderCheckboxes.call(this)}
                
                {/* <input ref="label" type="text"/> */}
                {/* <button onClick={addCheckbox.bind(this)}>Add Checkbox</button> */}
                <div>
                    <h4>Filters ({this.state.filter})</h4>
                    <a href="#" onClick={updateFilter.bind(this, 'ALL')}>ALL</a>
                    &nbsp;|&nbsp;
                    <a href="#" onClick={updateFilter.bind(this, 'CHECKED')}>CHECKED</a>
                    &nbsp;|&nbsp;
                    <a href="#" onClick={updateFilter.bind(this, 'UNCHECKED')}>UNCHECKED</a>
                </div>
            </StyledContainer>
        );
    }
}

export default DynamicCheckBoxes;