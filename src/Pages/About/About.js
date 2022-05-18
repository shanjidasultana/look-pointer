import React from 'react';
import { Container, Typography } from '@mui/material';
import '../Gellary/Gellary.css'
const About = () => {
    return (
        <div style={{backgroundColor:"#212121",}}>
        <Container className = "tdimension">
          <a style={{textDecoration:'none',Color:""}} href = "#">
            <Typography variant="h2"  >ABOUT US </Typography>
            <Typography variant="subtitle2" >Our philosophy.</Typography>
            <Typography variant="body2" sx={{mb:5,color:'gray'}}>Katy Morrious an event logistics and marketing company which was formed back in 2013. The company offers A-Z event planning services from a team of experienced and energetic event planners, suppliers, venues and more. One of the main reasons behind the success of Event Planner is the fact that the team does not charge fees to its clients! With the number of events we organise, Event Planner Ltd does not need to add exorbitant fees and mark-ups to make its profit margins. This ensures that our clients list, which is constantly growing, make regular use of our services.</Typography>
            <Typography variant="subtitle2" sx={{fontWeight:'bold'}}>There is no fee. There is no mark-up!</Typography>
            <Typography variant="body2" sx={{mb:5,color:'gray'}} >The Event Planner team does not charge any fees to its clients*. Yes, this might sound strange. However, the company earns its profits through its suppliers, with whom a very strong relationship has been built. This does not mean that the costs are up-marked to make up for the fee. On the contrary, they are less than it would cost a company when booking directly. We know it sounds too good to believe, but over the years this formula has helped the Event Planner team become the success story they are today. This has not in any way reduced the level of professionalism with which the services are carried, as shown by the large number of local and international clients,  who work with us on a regular basis.In a nutshell, you pay no fee, pay your supplier less and have a professional team handling all your loose ends. Sounds too good, but it is true! You can check out our clients as testimonials</Typography>
            <Typography variant="subtitle2"sx={{fontWeight:'bold'}} >The Team</Typography>
            <Typography variant="body2"sx={{mb:5,color:'gray'}} >The Event Planner team is made up of a mix of people. James and Ilona take care of corporate events. Josette is the wedding guru. Nicole is the creative one. Sergio is the merchandise expert. In addition to this group of people, a large support team helps out in everything the company does, in office work to on-site logistics planning. One thing we can truly say about our team is that we are very passionate about our job!</Typography>
            <Typography variant="subtitle2"sx={{fontWeight:'bold'}} >How can we help you organise a successful event?</Typography>
            <Typography variant="body2" sx={{mb:5,color:'gray'}} >    
            1 . A-Z event planning. We shall work on your event from beginning to end. You may relax and leave all the logistics to us.
            2 . Venue Consultancy. Finding a venue in Malta is not as easy as people make it sound. While offering an extensive list of venues on our website, we know and have contact with hundreds of venues around the Maltese Islands, one of which will most definitely fit into your event scenario.
            3 . We organise: product launches, gala receptions, seminars and conferences, staff events, awards nights, team building events, B2B and B2C networking events, weddings and more.
            4 .    We give you more: transport services, photography, videography, furniture rental, entertainment, sound and lighting, branding, security, RSVP communication and follow up, staff, sms/email marketing, handle VIPs, catering and any event-related consultancy.
            
            * *A fee applies only when client requests specific human hours and help, and is done by agreement with the client.*
            
            
            </Typography>

            

          </a>
      </Container>
      </div> 
    );
};

export default About;