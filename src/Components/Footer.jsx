import { ArrowUp } from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-white/10 backdrop-blur-3xl py-8 px-4 text-white relative border border-t mt-12 pt-8 flex flex-wra justify-between items-center ">
      <p className=" text-sm text-muted-foreground  ">
        &copy: {new Date().getFullYear()}
        Pedrotech.co, All right reserved.
      </p>
      <a
        href="#hero"
        className=" p-2 rounded-full bg-primary/10 hover:bg-white/10 backdrop-blur-3xl text-primary transition-colors "
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
