import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';
import { Container } from '@/components/ui';

// Custom icons
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const DiscordIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const LinktreeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="m15.7603 6.829 4.6725-4.80317 2.712 2.77734-4.9012 4.67248h6.8944v3.85565h-6.9271l4.9339 4.7922-2.712 2.7229-6.6983-6.731-6.69829 6.731-2.712-2.712 4.93387-4.7923h-6.92703v-3.86645h6.89436l-4.9012-4.67248 2.712-2.77734 4.67249 4.80317v-6.829h4.0516zm-4.0516 12.0243h4.0516v9.1489h-4.0516z"/>
  </svg>
);

  const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M23 12C23 5.92487 18.0751 0.999996 12 0.999996C5.92488 0.999996 1 5.92487 1 12C1 17.1588 4.55146 21.4874 9.34266 22.6761V15.3614H7.07438V12H9.34266V10.5516C9.34266 6.80751 11.037 5.07215 14.7128 5.07215C15.4096 5.07215 16.6121 5.20877 17.104 5.34544V8.39261C16.8444 8.36529 16.3935 8.3516 15.8332 8.3516C14.0295 8.3516 13.3326 9.03484 13.3326 10.8112V12H16.9256L16.3084 15.3614H13.3326V22.9194C18.7792 22.2616 23 17.624 23 12Z"/>
  </svg>
);

  const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8142 5.41679C20.6763 5.64906 21.3541 6.32675 21.5832 7.18581C22 8.74483 22 11.9997 22 11.9997C22 11.9997 22 15.2545 21.5832 16.8136C21.3509 17.6757 20.6733 18.3535 19.8142 18.5825C18.2551 18.9993 12 18.9993 12 18.9993C12 18.9993 5.74801 18.9993 4.18581 18.5825C3.32358 18.3502 2.64588 17.6726 2.4168 16.8136C2 15.2545 2 11.9997 2 11.9997C2 11.9997 2 8.74483 2.4168 7.18581C2.64907 6.32358 3.32676 5.64588 4.18581 5.41679C5.74801 5 12 5 12 5C12 5 18.2551 5 19.8142 5.41679ZM15.1961 11.9992L10.0004 14.9994V8.99883L15.1961 11.9992Z"></path>
  </svg>
);

  const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M4.30606 7.28017C4.14002 7.62375 4.06901 7.99473 4.03469 8.4148C3.99999 8.83953 3.99999 9.36401 4 10.0143V13.9857C3.99999 14.6359 3.99999 15.1604 4.03469 15.5852C4.07042 16.0225 4.14591 16.4066 4.32698 16.7619C4.6146 17.3264 5.07354 17.7854 5.63803 18.073C5.9934 18.2541 6.37752 18.3296 6.81483 18.3653C7.23955 18.4 7.76404 18.4 8.4143 18.4H15.5857C16.236 18.4 16.7605 18.4 17.1852 18.3653C17.6225 18.3296 18.0066 18.2541 18.362 18.073C18.9265 17.7854 19.3854 17.3264 19.673 16.7619C19.8541 16.4066 19.9296 16.0225 19.9653 15.5852C20 15.1604 20 14.6359 20 13.9857V10.0143C20 9.36401 20 8.83953 19.9653 8.4148C19.931 7.99473 19.86 7.62375 19.6939 7.28017L13.8997 12.0209C12.7946 12.9251 11.2054 12.9251 10.1003 12.0209L4.30606 7.28017Z"></path>
    <path d="M18.9609 6.3295C18.7792 6.17262 18.5783 6.0372 18.362 5.92696C18.0066 5.74588 17.6225 5.6704 17.1852 5.63467C16.7605 5.59997 16.236 5.59997 15.5857 5.59998H8.41432C7.76406 5.59997 7.23955 5.59997 6.81483 5.63467C6.37752 5.6704 5.9934 5.74588 5.63803 5.92696C5.42166 6.0372 5.2208 6.17262 5.03915 6.3295L10.8602 11.0922C11.5232 11.6347 12.4768 11.6347 13.1398 11.0922L18.9609 6.3295Z"></path>
  </svg>
);

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Alumni', href: '/alumni' },
    { name: 'Events', href: '/events' },
  ],
  resources: [
    { name: 'Monthly', href: '/monthly' },
    { name: 'Club Score', href: '/club-score' },
    { name: 'Contact', href: '#contact' },
    { name: 'Join Us', href: '#join' },
  ],
};

const socialLinks = [
  { name: 'Linktree', icon: LinktreeIcon, href: 'https://linktr.ee/ascwsu' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://www.facebook.com/ASCWSU' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/ascwsu' },
  { name: 'TikTok', icon: TikTokIcon, href: 'https://www.tiktok.com/@wsu_asc' },
  { name: 'YouTube', icon: YoutubeIcon, href: 'https://www.youtube.com/@ascwichita' },
  { name: 'Discord', icon: DiscordIcon, href: 'https://discord.com/invite/XK6sZc7rVg' },
  { name: 'Email', icon: MailIcon, href: 'mailto:asc.shockers@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold text-white mb-4">
                Asian Student Conference
              </h3>
              <p className="text-sm mb-4">
                Building community, celebrating culture, and fostering leadership at 
                Wichita State University.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[var(--old-gold)] transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-[var(--old-gold)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm hover:text-[var(--old-gold)] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Asian Student Conference - 
              Wichita State University. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
