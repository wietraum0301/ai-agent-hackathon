const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 MEGAZONE CLOUD. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="mailto:celia@megazone.com" className="hover:text-primary transition-colors">문의하기</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
