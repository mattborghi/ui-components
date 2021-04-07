import React from 'react';
import { NotificationsButton } from './notifications-button';

// sets the Component preview in gallery view
export const BasicNotificationsButton = () => {
  return <NotificationsButton onClick={console.log("Click!")} />
};
