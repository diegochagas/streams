import React, { Component } from 'react';
import { signIn, signOut } from '../actions'; 
import { connect } from 'react-redux';

class GoogleAuth extends Component {
    constructor(props){
        super(props);
        this.onAuthChange = this.onAuthChange.bind(this);
        this.onSignInClick = this.onSignInClick.bind(this);
        this.onSignOutClick = this.onSignOutClick.bind(this);
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "903529887690-q7hli1e1vfhurf9g82v7k2mc4eqk6iah.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    render() {
        return (
            <div className="google-auth">
                {this.renderAuthButton()}
            </div>
        );
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    <span>Sign out</span>
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    <span>Sign in with Google</span>
                </button>
            );
        }
    }

    onAuthChange(isSignedIn) {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick() {
        this.auth.signIn();
    }

    onSignOutClick() {
        this.auth.signOut();
    }
}

const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);