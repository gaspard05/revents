import React, {useState} from 'react';
import {Grid} from "semantic-ui-react";
import {EventList} from "./EventList";
import {EventForm} from "../eventform/EventForm";
import {sampleData} from "../../../app/api/sampledata";

export default function EventDashboard({formOpen, setFormOpen}) {
  const [events, setEvents]=useState(sampleData)
  return (
    <Grid doubling stackable>
      <Grid.Column width={10}>
        <EventList events={events}/>
      </Grid.Column>
      <Grid.Column width={6}>
        {formOpen && <EventForm setFormOpen={setFormOpen}/>}
      </Grid.Column>
    </Grid>
  );
};
