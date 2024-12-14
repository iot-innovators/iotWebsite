import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin, Printer } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">COMPANY NAME</h3>
            <p className="text-slate-300 leading-relaxed">
              Here you can use rows and columns to organize your footer content. 
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          {/* Products */}
          <div className="space-y-2">
            <h3 className="text-xl font-bold mb-4">PRODUCTS</h3>
            <ul className="space-y-2">
              {['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-300 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">CONTACT</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-slate-300">
                <MapPin size={18} />
                New York, NY 10012, US
              </p>
              <p className="flex items-center gap-3 text-slate-300">
                <Mail size={18} />
                info@gmail.com
              </p>
              <p className="flex items-center gap-3 text-slate-300">
                <Phone size={18} />
                + 01 234 567 88
              </p>
              <p className="flex items-center gap-3 text-slate-300">
                <Printer size={18} />
                + 01 234 567 89
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: Facebook, bg: 'bg-[#3b5998]' },
                { icon: Twitter, bg: 'bg-[#55acee]' },
                { icon: Instagram, bg: 'bg-[#ac2bac]' },
                { icon: Linkedin, bg: 'bg-[#0082ca]' },
                { icon: Github, bg: 'bg-[#333333]' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`${social.bg} p-2 rounded-full hover:opacity-80 transition-opacity`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="mt-12 pt-8">
        <div className="container mx-auto px-4 text-center text-slate-300">
          <p>© {new Date().getFullYear()} Copyright: Company Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;