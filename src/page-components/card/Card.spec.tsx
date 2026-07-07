/**
 * @vitest-environment jsdom
 */

import { expect, test } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
/*import { screen } from '@testing-library/dom';*/
import { Card } from './Card.tsx';
import { afterEach } from 'vitest';

afterEach(() => {
    cleanup();
});

test.skip('Card component renders user information correctly', () => {
    render(
            <Card
                directoryID={1024}
                name="John Doe"
                username="johndoe"
                isOrg={false}
            />
    );
    expect(screen.getByText("John Doe")).toBeTruthy();
})

test.skip('Card component renders organization information correctly', () => {
    render(
        <Card
            directoryID={1024}
            orgName="Bread"
            isOrg={true}
        />
    );
    // expect(screen.getByRole('strong', { name: /bread/i })).toBeTruthy();
    expect(screen.getByTestId("card-name")).toHaveTextContent("Bread");
})