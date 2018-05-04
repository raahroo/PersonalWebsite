import React, { Component } from 'react';

   class Menu extends Component{

    render() {
        return (
            <div className="Menu">
                <button onClick={this.props.handleClick}>Menu</button>
                <div className={(this.props.visible ? "visible " : "" ) + this.props.alignment}>
                    {this.props.children}
                </div>
            </div>
        );
        
    }

}

export default Menu;