import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row} from "../components/Grid";
import Card from "../components/Card";
import Footer from "../components/Footer"
import List from "../components/List";
import MyCalendars from "../components/Calendar";
import Nav from "../components/Nav";
const upcoming = [{
  event: "Dolphin Swim Practice",
  date: "February 1, 2020 at 6pm"
},
{
  event: "Red Cross Blood Drive",
  date: "February 29, 2020 at 2pm"
},

{
  event: "Block Party",
  date: "April 17, 2020 at 3pm"
},
{
  event: "Block Party",
  date: "April 17, 2020 at 3pm"
},
{
  event: "Block Party",
  date: "April 17, 2020 at 3pm"
},
{
  event: "Block Party",
  date: "April 17, 2020 at 3pm"
},

];
const promo = [{ event: "Race for the Cure" }, { event: "Community Yard Sale" }, { event: "Father Daughter Dance" }, { event: "CPR training" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, { event: "Race for the Cure" }, 
];


class Dashboard extends Component {
  state = {
    programs: [],
    events: [],
    programopen: false,
    eventopen: false
  }

  render() {
    return (
      <div>
        <Nav/>
      <div className="container">
        <h1 className="text-center dashboard"> Dashboard</h1>
        <Row>
          <Col size="6">

            <Card title="Your upcoming events:" >
              {upcoming.map(upcomingEvents => (
                <List event={upcomingEvents.event} date={upcomingEvents.date}></List>
              ))}
            </Card>

          </Col>
          <Col size="6">
            <Card title="Events you may be interested in:">
              {promo.map(promoEvents => (
                <List event={promoEvents.event}/>
                  ))}
          </Card>
          </Col>
        </Row>

          <Row>
            <Col size="12">
              {/* <h1>Calendar here</h1> */}
              <MyCalendars events={this.state.events}/>
            </Col>
          </Row>
          </div>
          <Footer />
      
      </div>
        );
      }
    }
    
export default Dashboard;