import React, { Component } from 'react';

import JSONEditorReact from './JSONEditorReact';
import './App.css';

const schema = {
  title: 'Example Schema',
  type: 'object',
  properties: {
    array: {
      type: 'array',
      items: {
        type: 'number'
      }
    },
    boolean: {
      type: 'boolean'
    },
    number: {
      type: 'number'
    }
  },
  required: ['array', 'string', 'boolean']
};

const json = {
  'array': [1, 2, 3],
  'boolean': true,
  'null': null,
  'number': 'four',
  'object': {'a': 'b', 'c': 'd'},
  'string': 'Hello World'
};

const modes = ['tree', 'form', 'view', 'code', 'text'];

class App extends Component {
  state = {
    schema,
    text: JSON.stringify(json, null, 2),
    mode: 'text'
  };

  render() {
    return (
      <div className="app">
        <div className="contents">
          <JSONEditorReact
              schema={this.state.schema}
              text={this.state.text}
              mode={this.state.mode}
              modes={modes}
              indentation={4}
              onChangeText={this.onChangeText}
              onModeChange={this.onModeChange}
          />
        </div>
      </div>
    );
  }

  onChangeText = (text) => {
    this.setState({ text });
  };

  onModeChangeSelect = (event) => {
    this.setState({ mode: event.target.value });
  };

  onModeChange = (mode) => {
    this.setState({ mode });
  };
}

export default App;
