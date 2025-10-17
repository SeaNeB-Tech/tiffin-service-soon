"use client";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Footer() {
    return (
        <footer className="bg-[#180409] text-gray-300" role="contentinfo">
            {/* Structured Data for LocalBusiness */}
            <Script type="application/ld+json" id="footer-json-ld">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "TiffinService.App",
                    "url": "https://tiffinservice.app",
                    "logo": "https://tiffinservice.app/logo.svg",
                    "sameAs": [
                        "https://www.facebook.com/TiffinServiceApp/",
                        "https://x.com/tiffinserviceap",
                        "https://www.linkedin.com/showcase/tiffinserviceapp/",
                        "https://www.instagram.com/tiffinserviceapp/",
                        "https://www.youtube.com/@tiffinserviceapp",
                        "https://www.instagram.com/tiffinserviceapp/",
                        "https://in.pinterest.com/tiffinserviceapp/"
                    ],
                    "contactPoint": [
                        {
                            "@type": "ContactPoint",
                            "contactType": "customer support",
                            "url": "https://about.tiffinservice.app/contact"
                        }
                    ]
                })}
            </Script>

            <div className="bg-[#C02247] text-white py-10 px-6">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6 md:flex-row md:justify-between md:text-left">
                    <div className="space-y-3">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                            Grow your Tiffin Service Business with us
                        </h2>
                        <p className="text-sm sm:text-base font-light">
                            Join us today and get new customers from nearby locality. Be a part of Digital India.
                        </p>
                    </div>

                    <Link
                        href="https://about.tiffinservice.app/partner-with-us"
                        className="mt-4 md:mt-0 bg-white text-[#C02247] font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition-all text-sm sm:text-base"
                        rel="noopener noreferrer"
                    >
                        Partner With Us
                    </Link>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-4">
                        <Image
                            src="/logo.svg"
                            alt="TiffinService.App Logo"
                            width={180}
                            height={60}
                            className="w-36 sm:w-40"
                        />
                        <p className="text-sm sm:text-base text-white max-w-xs">
                            Discover and subscribe to trusted local tiffin services with ease. Whether you’re a student, working professional, or home-cooked meal enthusiast, TiffinService connects you with healthy, affordable, and delicious meals near you.
                        </p>
                        <nav aria-label="Social Media Links" className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4 text-xl text-[#C02247]">
                            <Link href="https://www.facebook.com/tiffinserviceapp/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75"><i className="ri-facebook-fill"></i></Link>
                            <Link href="https://x.com/tiffinserviceap" target="_blank" rel="noopener noreferrer" className="hover:opacity-75"><i className="ri-twitter-x-fill"></i></Link>
                            <Link href="https://www.linkedin.com/products/tiffinserviceapp/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75"><i className="ri-linkedin-fill"></i></Link>
                            <Link href="https://www.instagram.com/tiffinserviceapp/" target="_blank" rel="noopener noreferrer" className="hover:opacity-75"><i className="ri-instagram-fill"></i></Link>
                            <Link href="https://www.youtube.com/@tiffinserviceapp" target="_blank" rel="noopener noreferrer" className="hover:opacity-75"><i className="ri-youtube-fill"></i></Link>
                        </nav>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">About</h3>
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
                                    <Link href={link} className="hover:text-[#C02247] transition-all" rel="noopener noreferrer">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
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
                                    <Link href={link} className="hover:text-[#C02247] transition-all" rel="noopener noreferrer">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-2 text-sm sm:text-base">
                            {[
                                ["Help & Support", "https://about.tiffinservice.app/contact"],
                                ["Partner with us", "https://about.tiffinservice.app/partner-with-us"],
                                ["Ride with us", "https://about.tiffinservice.app/ride-with-us"],
                                ["Report a Bug", "https://about.tiffinservice.app/report-a-bug"],
                            ].map(([label, link]) => (
                                <li key={label}>
                                    <Link href={link} className="hover:text-[#C02247] transition-all" rel="noopener noreferrer">
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm sm:text-base text-white">
                    <p>
                        Powered by{" "}
                        <Link href="#" className="text-[#C02247] hover:underline" rel="noopener noreferrer">
                            TiffinService.app
                        </Link>{" "}
                        | An App by{" "}
                        <Link href="https://www.seaneb.org/" target="_blank" className="text-[#C02247] hover:underline" rel="noopener noreferrer">
                            SeaNeB
                        </Link>{" "}
                        | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
