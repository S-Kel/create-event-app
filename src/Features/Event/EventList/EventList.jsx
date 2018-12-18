import React, { Component } from 'react';
import eventListItem from './eventListItem';
import EventListItem from './eventListItem';
class EventList extends Component {
    // state = {  }
    render() { 
        return (  
            <div>
                <h1>Event List</h1>
                <EventListItem />
                <EventListItem />
                <EventListItem />
            </div>
        );
    }
}
 
export default EventList;