import React from 'react';

interface CmsHtmlProps {
  encoded?: string;
  html?: string;
}

function decodeBase64Utf8(encoded: string): string {
  const binary = globalThis.atob(encoded);
  const bytes = Uint8Array.from(binary, (character) =>
    character.charCodeAt(0),
  );
  return new TextDecoder().decode(bytes);
}

export const CmsHtml: React.FC<CmsHtmlProps> = ({
  encoded,
  html = '',
}) => {
  const content = encoded ? decodeBase64Utf8(encoded) : html;
  return (
    <div
      className="cms-html"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default CmsHtml;
