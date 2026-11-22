import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProductList from '../pages/ProductList';

global.fetch = vi.fn();

const mockProducts = [
  { id: '1', name: 'Apple Laptop', price: 1000, image: 'url1' },
  { id: '2', name: 'Samsung Phone', price: 500, image: 'url2' },
];

describe('ProductList Component', () => {
  beforeEach(() => {
    vi.resetAllMocks();
    fetch.mockResolvedValue({
      json: () => Promise.resolve(mockProducts),
    });
  });

  it('renders the products fetched from the API', async () => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );
    const product1 = await screen.findByText('Apple Laptop');
    expect(product1).toBeInTheDocument();
  });

  it('filters products when the user types in the search bar', async () => {
    render(
      <BrowserRouter>
        <ProductList />
      </BrowserRouter>
    );
    await screen.findByText('Apple Laptop');
    const searchInput = screen.getByPlaceholderText(/search products/i);
    
    fireEvent.change(searchInput, { target: { value: 'Samsung' } });

    expect(screen.getByText('Samsung Phone')).toBeInTheDocument();
    expect(screen.queryByText('Apple Laptop')).not.toBeInTheDocument();
  });
});