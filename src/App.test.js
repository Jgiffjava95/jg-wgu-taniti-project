import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react';
import App from './App';

test('renders home page by default', () => {
  render(<App />);
  const homeElements = screen.getAllByText(/Home/i);
  expect(homeElements.length).toBeGreaterThan(0);
});

test('renders activities page with list items', async () => {
  render(<App />);
  
  // Open side nav
  const menuButton = screen.getByText('☰');
  fireEvent.click(menuButton);
  
  // Click Activities link
  const activitiesLink = screen.getByText('Activities');
  fireEvent.click(activitiesLink);
  
  // Check if activity items are rendered
  expect(screen.getByText('Volcano Tours')).toBeInTheDocument();
  expect(screen.getByText('Merriton Landing Entertainment')).toBeInTheDocument();
});

test('renders secondary navigation on Food page', () => {
  render(<App />);
  
  // Open side nav
  const menuButton = screen.getByText('☰');
  fireEvent.click(menuButton);
  
  // Click Food link
  const foodLink = screen.getByText('Food');
  fireEvent.click(foodLink);
  
  // Check if SecondaryNav links are rendered
  expect(screen.getByText('Restaurants')).toBeInTheDocument();
  expect(screen.getByText('Grocery')).toBeInTheDocument();
});
