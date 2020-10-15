import React, {Component} from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import Teamimg from "./images/team.svg";
import Vision from "./images/vision.svg";
import Mission from "./images/mission.svg";
class Home extends Component {
    render() {
        return(
            <div className="homeBackground">
                <a href="https://github.com/niranjanhegde144/ISETechClub" target="_blank" rel="noopener noreferrer" className='forkLink'>
                    <img
                        border='0' alt='Github' width='150' height='150'
                        src='https://github.blog/wp-content/uploads/2008/12/forkme_right_darkblue_121621.png?resize=149%2C149'
                    />
                </a>
                <div className="bannerImage">
                    <img src="https://media-exp1.licdn.com/dms/image/C511BAQFRMrZ7IbwQcw/company-background_10000/0?e=2159024400&v=beta&t=n6X6b5kikVkRnn8nkLk6W2TkEPCS3_k48lu2Xxmffl8" alt="ISE TECH CLUB" width="100%" height="auto" />
                </div>
                <br />
                <Jumbotron className="homeCard">
                <section class="section" id="services">
        <div class="paras">

            <p class="sectiontag text-big text1">About Us</p>
            <p class="sectionsubtag text-small text2">ISTC OR Information Science Technical Club is a student run body founded by our alumni and students with the help of our HOD and few of our very experienced teachers in 2019.
In  today’s  rapidly  changing  environment,  programming  skills  are  essential  tools  that  can  be  utilized  and incorporated  into  various  fields  and  domains.  Hence,  it  becomes  absolutely  essential  to  equip  young minds  with  such  skills.  Coding  Club  aims  to  establish  a  coding  culture  on  campus,  reaching  every  student passionate  about  coding and reaching all of them.</p>
        </div>
        <div class="thumb">
            <img src={Teamimg} alt="idea" srcset="" class="imgfluid"/>
        </div>
    </section>
    
    <section class="section left">
        <div class="paras">

            <p class="sectiontag text-big text1">Mission</p>
            <p class="sectionsubtag text-small text2">To give students the relevant skills, confidence and opportunities to change their coding environment and knowledge about tech. We believe in working and learning together. 
We want that through the events of near future we all learn and grow.</p>
        </div>
        <div class="thumb">
            <img src={Mission} alt="idea" srcset="" class="imgfluid"/>
        </div>
    </section>
    
    <section class="section">
        <div class="paras">

            <p class="sectiontag text-big text1">Vision</p>
            <p class="sectionsubtag text-small text2">We believe that realizing ideas of students will make a institute more powerful,we are trying to provide a platform for those hidden ideas within you. The main vision of ISTC  is to make a student succeed upto certain extent in realising their ideas. We also aims to strengthen the Coding culture, Entrepreneurship and team work among students.</p>
        </div>
        <div class="thumb">
            <img src={Vision} alt="idea" srcset="" class="imgfluid"/>
        </div>
    </section>
                </Jumbotron>
                
                <p className="note">*NOTE: To contribute in this project, open in a desktop browser*</p>
            </div>
        )
    }
}


export default Home;
