type Props = {
  params: { slug: string[] };
};

export default function DocsPage({ params }: Props) {
  return (
    <div>
      <h1>Docs page</h1>
      <p>Current path: {params.slug?.join(' / ') || 'home'}</p>
    </div>
  );
}
