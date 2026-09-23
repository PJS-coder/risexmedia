import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'RiseXMedia — Built to stand out.', description: 'Bold ideas. Distinctive brands. Digital experiences that move you. Meet RiseXMedia.', icons: { icon: '/risexmedia-logo.png', apple: '/risexmedia-logo.png' } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
