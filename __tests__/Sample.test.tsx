import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Sample from '../components/Sample';

describe("test Sample", () => {
  it('renders correctly with defaults', () => {
    const comp = renderer.create(<Sample text="XxXxX" />)
    expect(comp).toMatchSnapshot()
  })

  it('increments number by pressed button', () => {
    const { getByText } = render(<Sample text="XxXxX" />);
    fireEvent.press(getByText("increment"));
    fireEvent.press(getByText("increment"));
    expect(getByText("2")).toBeTruthy();
  })
})