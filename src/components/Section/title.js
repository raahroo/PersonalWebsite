import React from 'react';
import Animation from '../Main/animation';

class SectionTitle extends React.Component {
    render() {
      return (
        <div className="container Section__title--background">
            <Animation last /> 
            <h1 className="Section__title">
                {this.props.label}
            </h1>
        </div>
      );
    }
  }
  
export default SectionTitle;