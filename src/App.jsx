



export default function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/new" element={<FormPage />} />
          <Route path="/menu/:id" element={<MenuDetail />} />
          <Route path="/orders" element={<OrderList />} />
        </Route>
      </Routes>
    </ProductsProvider>
  );
}
