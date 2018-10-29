import React, { Component } from 'react'; 
import { ContextMenu, MenuItem, ContextMenuTrigger ,SubMenu } from "react-contextmenu";
import styled from 'styled-components';
import ExportColumns from './ExportColumns';
const StyledContextMenu = styled.div`

.react-contextmenu react-contextmenu--visible{
    position: fixed; 
    opacity: 1; 
    pointer-events: auto;
     top: 334px; 
     left: 541px;

}

.react-contextmenu-item{
    background: grey;
    border: 0;
    color: #373a3c;
    cursor: pointer;
    font-weight: 400;
    line-height: 1.5;
    padding: 3px 20px;
    text-align: inherit;
    white-space: nowrap;;

}


.react-contextmenu.react-contextmenu--visible {
    z-index: 9999;
    background: grey;
}


.react-contextmenu-item react-contextmenu-item--divider{
    aria-orientation:horizontal;
    aria-disabled:false;

}

`;

const MENU_TYPE = 'SIMPLE';
class SimpleMenu extends Component {
    constructor(props) {
        super(props);

        this.state = { logs: [] };
    }

    handleClick = (e, data) => {
        this.setState(({ logs }) => ({
            logs: [`Clicked on menu ${data.item}`, ...logs]
        }));
    }

    render() {
        const colsArray = ExportColumns.columnsArray();
        return (
            <StyledContextMenu>
                <h3>Simple Menu</h3>
                <p>This demo simple usage of a context menu.</p>
                <ContextMenuTrigger holdToDisplay={0} id={MENU_TYPE} holdToDisplay={0}>
                    <div className='well'>right click to see the menu</div>
                </ContextMenuTrigger>
                <div>
                    {this.state.logs.map((log, i) => <p key={i}>{log}</p>)}
                </div>
                <ContextMenu id={MENU_TYPE}>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 1' }}>Menu Item 1</MenuItem>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 2' }}>Menu Item 2</MenuItem>
                    <hr/>
                    <MenuItem onClick={this.handleClick} data={{ item: 'item 3' }}>Menu Item 3</MenuItem>
                    <SubMenu title='A SubMenu'>
                    
                       <MenuItem onClick={this.handleClick} data={{ item: 'subitem 1' }}>o[Header]</MenuItem>
                    
                    </SubMenu>
                </ContextMenu>
            </StyledContextMenu>
        );
    }
}

export default SimpleMenu;