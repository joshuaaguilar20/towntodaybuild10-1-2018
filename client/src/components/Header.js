import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Stripe from './Stripe';





class Header extends Component {
    renderContent(){
        switch (this.props.auth){
            case null:
            return;
            case false:
            return(
                <li><a href="/auth/google">Login With Google</a></li>
            );
            default:
            return [<li key="1"><a href="/api/logout">Logout</a></li>,
                    <li key="2"><Stripe/></li>,
                    <li key="3"
                        style={{margin:'0 10px'}}>
                        Credits:{this.props.auth.credits}
                    </li>
        ];
        }
    }

    render(){
        return(
             <nav>
               <div className="nav-wrapper">
                <Link to={this.props.auth ? '/survery':'/' } 
                className=" left brand-logo">Email</Link>
                <ul  className="right">
                 {this.renderContent()}
               </ul>
              </div>
             </nav>
        )
    }
};

function mapStateToProps({ auth }){
    return {auth };
};

export default connect(mapStateToProps)(Header);