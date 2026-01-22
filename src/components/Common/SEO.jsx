import { useEffect } from 'react';

const SEO = ({ title, description, keywords, image, url }) => {
  const siteTitle = "AroundU";
  const defaultDescription = "Home services platform for affordable daily home services, trusted service providers, personal tutor near me, and on-demand home help.";
  const defaultImage = "/assets/logo/Logo.jpeg";
  const defaultUrl = typeof window !== 'undefined' ? window.location.href : '';

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || defaultDescription;
  const metaKeywords = keywords || "home services platform, affordable home services, daily home services, personal tutor near me, trusted service providers, on-demand home services";
  const metaImage = image || defaultImage;
  const metaUrl = url || defaultUrl;

  useEffect(() => {
    // Update document title
    document.title = metaTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      
      tag.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', metaDescription);
    updateMetaTag('keywords', metaKeywords);

    // Open Graph meta tags
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', metaUrl, true);
    updateMetaTag('og:title', metaTitle, true);
    updateMetaTag('og:description', metaDescription, true);
    updateMetaTag('og:image', metaImage, true);

    // Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', metaUrl);
    updateMetaTag('twitter:title', metaTitle);
    updateMetaTag('twitter:description', metaDescription);
    updateMetaTag('twitter:image', metaImage);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = metaUrl;

  }, [metaTitle, metaDescription, metaKeywords, metaImage, metaUrl]);

  return null;
};

export default SEO;
