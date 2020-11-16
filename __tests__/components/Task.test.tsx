import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import Task from '../../components/Task';
import { TaskItem } from '../../types/TaskItem';
import { deleteTask } from '../../redux/Todo/actions';

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

const mockNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native') as any,
    useNavigation: () => ({
      navigate: mockNavigate
    }),
  }
})

const sampleTask: TaskItem = {
  id: "xxx",
  title: "titie",
  description: "desc"
};

describe("test Task", () => {
  it('renders correctly with defaults', () => {
    const comp = renderer.create(<Task task={sampleTask} index={0} />)
    expect(comp).toMatchSnapshot()
  })

  it('navigate to desc page by pressing Title', () => {
    const { getByText } = render(<Task task={sampleTask} index={0} />);
    fireEvent.press(getByText("titie"));
    expect(mockNavigate).toHaveBeenCalledWith(
      'Detail',
      {
        id: "xxx",
      }
    );
  })

  it('delete task by pressing Delete Button and navigate to Home', () => {
    const { getByText } = render(<Task task={sampleTask} index={0} />);
    fireEvent.press(getByText("Delete"));
    expect(mockDispatch).toHaveBeenCalledWith(deleteTask("xxx"));
    expect(mockNavigate).toHaveBeenCalledWith("Home");
  })
})