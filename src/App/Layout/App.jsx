import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import EventDashboard from '../../Features/Event/EventDashboard/EventDashboard';
import NavBar from "../../Features/Nav/NavBar/NavBar";

import './App.css';


class App extends Component {
    render() {
        return ( 
            <div>
                <NavBar />
                <Container  className = "main" >                
                    <EventDashboard />             
                </Container>
            </div>
            
        );
    }
}

export default App;