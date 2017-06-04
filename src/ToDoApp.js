import React, { Component } from 'react';
import { Panel } from './components';

export class ToDoApp extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Panel>
        <h1 className="panelHeader">
          To-dos
        </h1>
      </Panel>
    );
  }
}
