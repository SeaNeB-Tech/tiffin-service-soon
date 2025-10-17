"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#180409] text-gray-300">
      {/* CTA Section */}
      <div className="bg-[#C02247] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Grow your Tiffin Service Business with us.
            </h2>
            <p className="text-sm sm:text-base font-light">
              Join us today and get new customers from nearby locality. Be a
              part of Digital India.
            </p>
          </div>

          <Link
            href="https://about.tiffinservice.app/partner-with-us"
            className="bg-white text-[#C02247] font-semibold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full shadow-md hover:bg-gray-100 transition-all text-sm sm:text-base"
          >
            Partner With Us
          </Link>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
            <Image
              src="/logo.svg"
              alt="logo"
              width={180}
              height={60}
              className="w-36 sm:w-40"
            />
            <p className="text-sm sm:text-base text-white max-w-xs">
              Welcome to our online order website! Browse our products and place
              orders from the comfort of your home.
            </p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4 text-xl text-[#C02247]">
              <Link href="https://www.facebook.com/TiffinSearchApp/" target="_blank" className="hover:opacity-75">
                <i className="ri-facebook-fill"></i>
              </Link>
              <Link href="https://x.com/tiffinsearch" target="_blank" className="hover:opacity-75">
                <i className="ri-twitter-x-fill"></i>
              </Link>
              <Link href="https://www.linkedin.com/products/seaneb-tiffin-search/" target="_blank" className="hover:opacity-75">
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link href="https://www.instagram.com/tiffinsearch/" target="_blank" className="hover:opacity-75">
                <i className="ri-instagram-fill"></i>
              </Link>
              <Link href="https://www.youtube.com/@tiffinsearch" target="_blank" className="hover:opacity-75">
                <i className="ri-youtube-fill"></i>
              </Link>
            </div>
          </div>

          {/* About Links */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">About</h5>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                ["About Tiffin Service", "https://about.tiffinservice.app/about"],
                ["News & Blogs", "https://about.tiffinservice.app/blog"],
                ["Our Services", "https://about.tiffinservice.app/services"],
                ["Press Kit", "https://about.tiffinservice.app/press-kit"],
                ["Career", "https://www.linkedin.com/company/seaneb/jobs/"],
                ["FAQs", "https://about.tiffinservice.app/faqs-for-tiffin-service-providers"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link href={link} className="hover:text-[#C02247] transition-all">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Policies</h5>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                ["Acceptable Use Policy", "https://about.tiffinservice.app/acceptable-use-policy"],
                ["Terms & Conditions", "https://about.tiffinservice.app/terms-conditions"],
                ["Delivery Policy", "https://about.tiffinservice.app/delivery-policy"],
                ["Privacy Policy", "https://about.tiffinservice.app/privacy-policy"],
                ["Refund Policy", "https://about.tiffinservice.app/refund-policy"],
                ["Cookie Policy", "https://about.tiffinservice.app/cookie-policy"],
                ["Disclaimer", "https://about.tiffinservice.app/disclaimer"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link href={link} className="hover:text-[#C02247] transition-all">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-lg font-semibold text-white mb-4">Contact</h5>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                ["Help & Support", "https://about.tiffinservice.app/contact"],
                ["Partner with us", "https://about.tiffinservice.app/partner-with-us"],
                ["Ride with us", "https://about.tiffinservice.app/ride-with-us"],
                ["Report a Bug", "https://about.tiffinservice.app/report-a-bug"],
              ].map(([label, link]) => (
                <li key={label}>
                  <Link href={link} className="hover:text-[#C02247] transition-all">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm sm:text-base text-white">
          <p>
            Powered by{" "}
            <Link href="#" className="text-[#C02247] hover:underline">
              TiffinSearch.App
            </Link>{" "}
            | An App by{" "}
            <Link href="https://www.seaneb.org/" target="_blank" className="text-[#C02247] hover:underline">
              SeaNeB
            </Link>{" "}
            | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
