// @flow
import * as React from 'react';
import {EventListItem} from "./EventListItem";



export function EventList({events}) {
  return (
    <>
      {events.map(event=>(
        <EventListItem key={event.id} event={event}/>
      ))}
    </>
  );
}
