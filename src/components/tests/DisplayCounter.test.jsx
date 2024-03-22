// import { render } from "@testing-library/react"
// import "@testing-library/jest-dom"
// import DisplayCounter from "../DisplayCounter,"


// describe('first', () => {
//     it("should show count", () => {

//         const appl = render(<DisplayCounterayCounter)
//         console.log(appl)

//     })


// })

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import DisplayCounter from '../DisplayCounter';

describe('DisplayCounter Component', () => {
    const count = 5;
    const component = render(<DisplayCounter count={count} />);
    it('renders correctly with provided count', () => {

        screen.logTestingPlaygroundURL();
        //Assert that the component renders correctly
        const headingElement = component.getByText('display Counter');
        const countElement = component.getByText(count.toString()); // Convert count to string for comparison
        expect(headingElement).toBeInTheDocument();
        expect(countElement).toBeInTheDocument();
    });

    it('snapshot test', () => {
        expect(component).toMatchSnapshot();
    })
});
