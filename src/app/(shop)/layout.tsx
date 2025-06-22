export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header>Mi encabezado de la tienda</header>
      <main>{children}</main>
      <footer>Pie de página</footer>
    </>
  );
}
