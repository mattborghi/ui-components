import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BasicNotificationsButton } from './notifications-button.composition';


describe('notifications-button', () => {

  it('calls "onClick" prop on button click', () => {
    // Render new instance in every test to prevent leaking state
    const onClick = jest.fn();
    const { getByRole } = render(<BasicNotificationsButton onClick={onClick()} />)
    fireEvent.click(getByRole('button', { name: "notification-btn" }));
    expect(onClick).toHaveBeenCalled();
  });

})