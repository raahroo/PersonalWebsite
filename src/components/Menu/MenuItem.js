import React, { Component } from 'react';

class MenuItem extends Component{

    constructor(props) {
        super(props);
        this.state={
            navigate: function(hash) {
                window.location.hash = hash;
            },
            hash: "hash"
        }
    }
    render(){
        return(
            <div className="MenuItem"  
            >
                {this.props.label}
            </div>
        );
            
    }
}

export default MenuItem;