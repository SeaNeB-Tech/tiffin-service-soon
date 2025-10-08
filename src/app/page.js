"use client";

import Head from "next/head";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterLine,
  RiPinterestLine,
  RiLinkedinBoxLine,
  RiYoutubeLine
} from "react-icons/ri";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>TiffinService – Your Trusted Platform for Fresh Homemade Tiffin Delivery</title>
        <meta
          name="description"
          content="TiffinService connects you with verified local tiffin providers delivering fresh, homemade meals daily. Experience convenience, quality, and taste — launching soon!"
        />

        <meta
          name="keywords"
          content="Tiffin service, meal delivery, homemade food, tiffin search, food delivery"
        />
        <meta name="author" content="TiffinService" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.tiffinservice.app/" />

        <meta property="og:title" content="TiffinService - Coming Soon" />
        <meta
          property="og:description"
          content="Discover the best tiffin services near you with TiffinService. Stay tuned for our launch!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.tiffinservice.app/" />
        <meta property="og:image" content="https://www.tiffinservice.app/og-image.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TiffinService - Coming Soon" />
        <meta
          name="twitter:description"
          content="Discover the best tiffin services near you with TiffinService. Stay tuned for our launch!"
        />
        <meta name="twitter:image" content="https://www.tiffinservice.app/og-image.jpg" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TiffinService",
            "url": "https://www.tiffinservice.app/",
            "logo": "https://www.tiffinservice.app/logo.svg",
            "sameAs": [
              "https://www.facebook.com/TiffinSearchApp/",
              "https://x.com/tiffinsearch",
              "https://www.linkedin.com/products/seaneb-tiffin-search/",
              "https://www.youtube.com/@tiffinsearch",
              "https://www.instagram.com/tiffinsearch/",
              "https://in.pinterest.com/tiffinsearch/"
            ]
          })}
        </script>
      </Head>

      <div
        className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/food-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center max-w-xl sm:max-w-2xl lg:max-w-3xl text-white">
          <img
            src="/logo.svg"
            alt="TiffinService Logo"
            className="mx-auto mb-4 h-12 sm:h-16 md:h-20 w-auto"
          />

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Stay Tuned!
          </h1>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            We’ll be live soon...
          </h3>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 px-2 sm:px-0">
            Our team is cooking something amazing! We connect tiffin providers with customers through easy subscription services, bringing fresh meals straight to your door.
          </p>

          <div className="flex justify-center gap-4 sm:gap-6 mt-8 text-xl sm:text-2xl">
            <a href="https://www.facebook.com/TiffinSearchApp/" target="_blank" rel="noopener noreferrer">
              <RiFacebookFill />
            </a>
            <a href="https://x.com/tiffinsearch" target="_blank" rel="noopener noreferrer">
              <RiTwitterLine />
            </a>
            <a href="https://www.linkedin.com/products/seaneb-tiffin-search/" target="_blank" rel="noopener noreferrer">
              <RiLinkedinBoxLine />
            </a>
            <a href="https://www.youtube.com/@tiffinsearch" target="_blank" rel="noopener noreferrer">
              <RiYoutubeLine />
            </a>
            <a href="https://www.instagram.com/tiffinsearch/" target="_blank" rel="noopener noreferrer">
              <RiInstagramLine />
            </a>
            <a href="https://in.pinterest.com/tiffinsearch/" target="_blank" rel="noopener noreferrer">
              <RiPinterestLine />
            </a>
          </div>
        </div>

        <footer className="absolute bottom-4 text-white text-xs sm:text-sm z-10 text-center w-full">
          &copy; 2025 TiffinService. All rights reserved.
        </footer>
      </div>
    </>
  );
}
