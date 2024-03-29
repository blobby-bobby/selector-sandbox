import { render, screen } from '@testing-library/react';
import { Card } from './Card';
import '@testing-library/jest-dom';

describe('Card Component', () => {
  // Mock console.error before each test
  beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  // Restore console.error after each test
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders card component with title and children', () => {
    const title = 'Test Card';
    const content = 'Card Content - ReactNode';

    render(<Card title={title}>{content}</Card>);

    // Assert that the title and children are rendered
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  test('can render card component without title', () => {
    const content = 'Card Content';

    render(<Card>{content}</Card>);
    expect(screen.queryByTestId('card-title')).toBeNull();
    expect(screen.getByText(content)).toBeInTheDocument();
  });

  
  test('throws an error if children prop is not provided', () => {
    render(<Card>{null}</Card>);
    expect(console.error).toHaveBeenCalled();
  });

});
