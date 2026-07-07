import { render, screen } from '@testing-library/react';
import  { userEvent }  from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Header } from './Header.js';

describe('Header component', () => {
  it ('renders name and username of test user', () => {
    render(<Header name="Chris" username="chris1" />);
    expect(screen.getByText('Chris')).toBeInTheDocument();
    expect(screen.getByText('chris1')).toBeInTheDocument();
  });

  it ('show org elements if isOrg', () => {
    const user = userEvent.setup();
    render(<Header name="Org Name" username={undefined} isOrg={true} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it ('does not show org elements when isOrg is false', () => {
    render(<Header name="Person" username="p1" isOrg={false} />);
    const favorites = screen.queryByLabelText('favorites');
    expect(favorites).not.toBeInTheDocument();
  });
});
