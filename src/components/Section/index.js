import React from 'react';

class Section extends React.Component {
    render() {
      return (
        <section id={this.props.id} className="Section container-fluid" style={{backgroundColor: this.props.color}} >
          { this.props.title &&
            <div><h1>{this.props.title}</h1>
            <p>{this.props.paragraph}</p></div>
            }
          { this.props.child }
        </section>
      );
    }
  }
  
export default Section;