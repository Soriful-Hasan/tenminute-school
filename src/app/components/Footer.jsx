import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 px-4 md:px-6 py-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & App Download */}
        <div>
          <img
            src="https://10minuteschool.com/images/logo.svg"
            alt="10 Minute School"
            className="w-32 mb-4"
          />
          <p className="mb-3 font-semibold text-gray-600">
            Download Our Mobile App
          </p>
          <div className="space-y-2">
            <img
              src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png"
              alt="Google Play"
              className="w-32"
            />
            <img
              src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png"
              alt="App Store"
              className="w-32"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-3">Company</h3>
          <ul className="space-y-2 font-medium text-gray-600">
            <li>Career / Recruitment</li>
            <li>Join as a Teacher</li>
            <li>Join as an Affiliate</li>
            <li>Privacy policy</li>
            <li>Refund policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Others */}
        <div>
          <h3 className="font-bold mb-3">Others</h3>
          <ul className="space-y-2 font-medium text-gray-600">
            <li>Blog</li>
            <li>Book Store</li>
            <li>Free Notes & Guides</li>
            <li>Job Preparation Courses</li>
            <li>Verify Certificate</li>
            <li>Free Download</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold mb-3">Keep up with us at</h3>
          <ul className="space-y-2 font-medium text-gray-600 text-sm">
            <li>
              Call Us: <span className="text-green-600">16910</span> (24×7)
            </li>
            <li>
              WhatsApp: <span className="text-green-600">+8801896016252</span>{" "}
              (24×7)
            </li>
            <li>
              Outside Bangladesh:{" "}
              <span className="text-green-600">+880 9610916910</span>
            </li>
            <li>
              Email:{" "}
              <a
                href="mailto:support@10minuteschool.com"
                className="text-green-600"
              >
                support@10minuteschool.com
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-4 text-white">
            <div className="bg-gray-900 p-2 rounded-full">
              <FaFacebookF size={16} />
            </div>
            <div className="bg-gray-900 p-2 rounded-full">
              <FaInstagram size={16} />
            </div>
            <div className="bg-gray-900 p-2 rounded-full">
              <FaLinkedinIn size={16} />
            </div>
            <div className="bg-gray-900 p-2 rounded-full">
              <FaYoutube size={16} />
            </div>
            <div className="bg-gray-900 p-2 rounded-full">
              <FaTiktok size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs text-gray-500 mt-10 px-2">
        © 2015 - 2025 10 Minute School. All rights reserved.
      </div>
    </footer>
  );
}
