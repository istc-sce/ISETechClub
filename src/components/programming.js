import React, {Component} from 'react';

class Programming extends Component {
    render() {
        return(
            <div>
                <a href="https://github.com/istc-sce/ISETechClub" target="_blank" rel="noopener noreferrer" className='forkLink'>
                    <img
                        border='0' alt='Github' width='150' height='150'
                        src='https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149'
                    />
                </a>
                <img className="bannerImageProgramming" src={process.env.PUBLIC_URL + "/banner.png"} alt="Under Construction" />
                <p className="note">*NOTE: To contribute in this project, open in a desktop browser*</p>
            </div>
        )
    }
}


export default Programming;
