import { Helmet } from "react-helmet-async";

export function Metadata({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Helmet>
      <meta name="author" content="Vegard Maaø" />
      <meta name="description" content={`${description}`} />
      <title>{`${title} | Holidaze`}</title>
    </Helmet>
  );
}
