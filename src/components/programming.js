import React, {Component} from 'react';

class Programming extends Component {
    render() {
        return(
            <div>
                <img className="bannerImageProgramming" src={process.env.PUBLIC_URL + "/banner.png"} alt="Under Construction" />
            </div>
        )
    }
}


export default Programming;
