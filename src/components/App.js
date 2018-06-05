import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toggleName from 'actions';
import { toggleNameFunction, showName } from 'types';

class App extends Component {
  showName = () => {
    this.props.toggleName();
  }

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

const mapStateToProps = state => ({
  showName: state.showName,
});

const mapDispatchToProps = dispatch => ({
  toggleName: bindActionCreators(toggleName, dispatch),
});

App.propTypes = {
  toggleName: toggleNameFunction.isRequired,
  showName: showName.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
