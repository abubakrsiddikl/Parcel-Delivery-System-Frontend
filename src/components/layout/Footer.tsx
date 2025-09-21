import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            SwiftSend
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            Fast, reliable, and secure parcel delivery across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3 dark:text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="/about" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-blue-600">Services</a>
            </li>
            <li>
              <a className="hover:text-blue-600">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3 dark:text-white">Follow Us</h4>
          <div className="flex gap-3">
            <Button variant="outline" size="icon">
              <Facebook className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t dark:border-slate-800 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} SwiftSend. All rights reserved.
      </div>
    </footer>
  );
}
