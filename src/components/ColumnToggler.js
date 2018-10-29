import React, { Component } from 'react'
import DynamicCheckBoxes from './DynamicCheckBoxes';
import ExportColumns from './ExportColumns';

export default class ColumnToggler extends Component {

  render() {

    return (
      <div>
        <DynamicCheckBoxes columns={this.props.columns}/>
      </div>
    )
  }
}
