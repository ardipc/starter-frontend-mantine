'use client';

import axios from 'axios';
import { SWRConfig } from 'swr';

const fetcher = (url: string) => axios.get(url).then(res => res.data);

export default function SWRProvider({ children }: { children: any }) {
  return (
    <SWRConfig value={{ fetcher }}>
      {children}
    </SWRConfig>
  );
}
