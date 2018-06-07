import withScrollReveal from 'react-scrollreveal';
import React, { Component } from 'react';

   class Animation extends Component{

    render() {
        const { refreshrevealanimation, animationContainerReference } = this.props;
        return (
            <div className="sr-item" ref={animationContainerReference} className="Animation container"> 
            { this.props.last &&
                <div className="Animation__last">
                    <div className="ink sr-item--sequence" />
                    <div className="ink2 sr-item--sequence2" />
                    <div className="ink3 sr-item--sequence3" />
                </div>
            }

            { this.props.right &&
                <div className="Animation__right">
                    <div className="ink sr-item--sequence" />
                    <div className="ink2 sr-item--sequence2" />
                    <div className="ink3 sr-item--sequence3" />
                </div>
                
            }
            </div>
        );
        
    }

}

export default withScrollReveal([
    {
      selector: '.sr-item',
      options: {
        reset: true,
      },
    },
    {
      selector: '.sr-item--sequence',
      options: {
        reset: true,
        delay: 800,
      },
      interval: 100
    },
    {
        selector: '.sr-item--sequence2',
        options: {
            reset: true,
            delay: 1200,
        },
        interval: 100
    },
    {
        selector: '.sr-item--sequence3',
        options: {
            reset: true,
            delay: 1600,
        },
        interval: 100
    }
    
  ])(Animation) 