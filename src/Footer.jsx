import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100 py-12">
      <div className="md:w-2/4 mx-auto text-center">
        <p className="text-xl font-extralight mb-5">Hecho con mucho 💟.</p>
        <ul className="flex gap-5 justify-center text-sm">
          <li className="p-2 hover:bg-slate-500 md:rounded transition-all text-slate-200">
            <a href="https://www.instagram.com/zkevin.2004/" target="_blank">Instragram</a>
          </li>
          <li className="p-2 hover:bg-slate-500 md:rounded transition-all text-slate-200">
            <a href="https://www.github.com/kevin04c" target="_blank">Github</a>
          </li>
          <li className="p-2 hover:bg-slate-500 md:rounded transition-all text-slate-200">
            <a href="https://www.tiktok.com/@kevin.dev" target="_blank">Tik Tok</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
