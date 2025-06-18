import Image from 'next/image';
export default function Home() {
  return (
    <main>
      <h1>home page</h1>
      <Image src="/GHL.png" alt="test" width={300} height={300} />
      {/* <Image
        src="https://picsum.photos/seed/picsum/300/300"
        alt="test"
        width={300}
        height={300}
      /> */}
    </main>
  );
}
