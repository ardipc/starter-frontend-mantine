import '@mantine/core/styles.css';

import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';
import SWRProvider from '@/utils/providers/swr';

export const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <SWRProvider>
          <MantineProvider theme={theme}>
            {children}
          </MantineProvider>
        </SWRProvider>
      </body>
    </html>
  );
}
