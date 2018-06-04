import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions';

class App extends Component {
  showName = () => {
    this.props.actions.showName();
  };

  render() {
    return (
      <div>
        <h1>Welcome to My Starter App</h1>
        <button onClick={this.showName}>Click me to do something!</button>
        {this.props.showName ? <p>Show me!</p> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    showName: state.showName
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
