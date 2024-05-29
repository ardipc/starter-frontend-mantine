import { Center, Container } from '@mantine/core';
import Link from 'next/link';
import Authentication from '@/components/Authentication/auth';

export default function Page() {
  return (
    <Center h="100vh">
      <Container w={400}>
        <Authentication />
        <Center>
          <Link href="/">back to Home</Link>
        </Center>
      </Container>
    </Center>
  );
}
