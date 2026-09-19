import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  type?: string;
  schema?: Record<string, any> | Record<string, any>[];
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  url = 'https://www.panditmanikanta.com', 
  image = 'https://www.panditmanikanta.com/assets/pandit-portrait.jpg',
  type = 'website',
  schema,
  canonicalUrl
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://www.panditmanikanta.com${url}`;
  const canonical = canonicalUrl || fullUrl;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sri Kanaka Durga Devi Astrology" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};
