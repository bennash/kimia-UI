import Head from 'next/head';
import MobileLayout from '@/website/components/layout/mobile';
import { Container } from '@/website/components/container';
import { DropdownComponent } from '@/components/dropdown/example';
import DropdownSnippet from '@/components/dropdown/snippets/index.mdx';

export default function DropdownPage() {
  return (
    <>
      <Head>
        <title>Dropdown</title>
        <meta
          name="description"
          content="Kimia-ui Dropdown allows the user to choose one value from a list. When a drop-down list is active, it displays a list of values"
        />
      </Head>
      <Container>
        <h1 className="text-center text-3xl md:text-5xl font-bold text-gray-600 mb-16 mt-12">
          Dropdown
        </h1>
        <DropdownComponent />
        <DropdownSnippet />
      </Container>
    </>
  );
}

DropdownPage.Layout = MobileLayout;
