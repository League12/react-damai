import React from 'react';
import './App.css';
import { connect } from 'react-redux';


class App extends React.Component {
    render() {
        return (
            <div>
                app
                {
                    this.props.children
                }
            </div>
        );
    }
}

let mapState2Props = (state) => {
    return {
        isShowFooterbar: state.isShowFooterbar
    }
};

export default connect(mapState2Props)(App);
