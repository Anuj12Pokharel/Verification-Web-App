
import { render, screen, fireEvent } from '@testing-library/react';
import VerificationForm from '../components/VerificationForm';

test('renders VerificationForm and handles input', () => {
  render(<VerificationForm />);
  const inputs = screen.getAllByRole('textbox');
  expect(inputs).toHaveLength(6);

  fireEvent.change(inputs[0], { target: { value: '1' } });
  expect(inputs[0].value).toBe('1');
});
