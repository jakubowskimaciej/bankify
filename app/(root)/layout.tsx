export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <p>sidebar</p>
      {children}
    </main>
  );
}
