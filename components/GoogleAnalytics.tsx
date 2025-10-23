'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

export default function GoogleAnalytics({ measurementId = 'G-XXXXXXXXXX' }: GoogleAnalyticsProps) {
  // Só carrega em produção
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}

// Função helper para rastrear eventos
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// Eventos pré-definidos para usar no site
export const analyticsEvents = {
  whatsappClick: (source: string) => 
    trackEvent('whatsapp_click', { source }),
  
  formSubmit: (formName: string) => 
    trackEvent('form_submit', { form_name: formName }),
  
  downloadClick: (fileName: string) => 
    trackEvent('download', { file_name: fileName }),
  
  videoPlay: (videoId: string) => 
    trackEvent('video_play', { video_id: videoId }),
  
  scrollDepth: (percentage: number) => 
    trackEvent('scroll_depth', { percentage }),
};
