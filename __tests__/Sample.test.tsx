import React from 'react';
import renderer from 'react-test-renderer';
import Sample from '../components/Sample';

describe("Snapshot test sample", () => {
  it('renders correctly with defaults', () => {
    const comp = renderer.create(<Sample number={10} />)
    expect(comp).toMatchSnapshot()
  })
})