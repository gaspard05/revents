// @flow
import * as React from 'react';
import {Image, List} from "semantic-ui-react";

export function EventListAttendee({attendee}) {
  return (
    <List.Item>
      <Image size={'mini'} circular src={attendee.photoURL} alt={"attendee"}/>
    </List.Item>
  );
}
