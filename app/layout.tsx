import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Felipe Castro | Portafolio",
  description: "Ingeniero Civil Informático - Desarrollador",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-900 text-white">
        <Navbar />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}