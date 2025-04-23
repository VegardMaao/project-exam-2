import { Helmet } from "react-helmet-async";

/**
 * @description Using the Helmet extention to dynamically set metadata
 * @param {object} titleAndDescription - title and description for pages
 * @returns
 */
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
