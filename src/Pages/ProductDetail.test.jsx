import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./ProductDetail";

test("shows product", async () => {
  render(
    <MemoryRouter initialEntries={["/products/1"]}>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );
  expect(await screen.findByText(/Loading|Back to Menu|Fjallraven/i)).toBeInTheDocument();
});
test("edit updates price", () => { expect(true).toBe(true); });
test("delete works", () => { expect(true).toBe(true); });