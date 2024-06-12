import React from 'react';
import {
    VerticalTimeline,
    VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaDog } from 'react-icons/fa';


const DoggyDayCare = () => {

    const dogIllustration = 'https://img.freepik.com/free-vector/beagle-dog-cartoon-white-background_1308-68249.jpg?size=626&ext=jpg&ga=GA1.1.1209051022.1717757913&semt=sph';
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold text-center mb-8">Doggy Day Care Process</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2b6cb0', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2b6cb0' }}
                    iconStyle={{ background: '#2b6cb0', color: '#fff' }}
                    icon={<FaDog />}
                >
                    <h3 className="vertical-timeline-element-title">Meet & Greet Session</h3>
                    <p>Get to know each other</p>
                    <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#d53f8c', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #d53f8c' }}
                    iconStyle={{ background: '#d53f8c', color: '#fff' }}
                    icon={<FaDog />}
                >
                    <h3 className="vertical-timeline-element-title">Physical Check</h3>
                    <p>A quick physical check of the dog will be conducted during check-in</p>
                    <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#38a169', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #38a169' }}
                    iconStyle={{ background: '#38a169', color: '#fff' }}
                    icon={<FaDog />}
                >
                    <h3 className="vertical-timeline-element-title">Check-in Form</h3>
                    <p>You will be asked to fill in a check-in form where you can also include any special instructions.</p>
                    <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#dd6b20', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #dd6b20' }}
                    iconStyle={{ background: '#dd6b20', color: '#fff' }}
                    icon={<FaDog />}
                >
                    <h3 className="vertical-timeline-element-title">Care Instructions Discussion</h3>
                    <p>Care instructions will be discussed prior making a booking – behavior, allergies, medications etc.</p>
                    <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#ecc94b', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #ecc94b' }}
                    iconStyle={{ background: '#ecc94b', color: '#fff' }}
                    icon={<FaDog />}
                >
                    <h3 className="vertical-timeline-element-title">Dog is Taken In</h3>
                    <p>The dog is then taken in</p>
                    <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#48bb78', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #48bb78' }}
                    iconStyle={{ background: '#48bb78', color: '#fff' }}
                    icon={<FaDog />}
                >
                    <h3 className="vertical-timeline-element-title">Grooming Services</h3>
                    <p>On the date of check-out, if you require any Grooming services, let us know in advance so that we can schedule it according to the availability. The same will be done prior to the check-out time indicated by you.</p>
                    <img src={dogIllustration} alt="Dog Illustration" className="w-24 h-24 mx-auto mt-4" />
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default DoggyDayCare;
