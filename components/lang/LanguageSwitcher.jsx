"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const langRef = useRef();

  const languages = [
    {
      code: "en",
      language: "English",
    },
    {
      code: "bn",
      language: "Bangla",
    },
  ];

  const found = languages.find((lang) => pathname.includes(lang?.code));
  const [selectedLanguage, setSelectedLanguage] = useState(
    found ?? languages[0]
  );
  const [showMenu, setShowMenu] = useState(false);

  const handleLanguageChange = (lang) => {
    /* let path = pathname;
    if (pathname.includes(selectedLanguage.code)) {
      path = pathname.replace(selectedLanguage.code, lang);
    } */
    setSelectedLanguage({
      ...selectedLanguage,
      code: lang,
      language: lang === "en" ? "English" : "Bangla",
    });
    setShowMenu(false);
    router.push(`/${lang}`);
  };

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (langRef.current && !langRef.current.contains(e.target))
        setShowMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);

    // clean
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <div className="flex gap-4 items-center" ref={langRef}>
      <div className="relative">
        <button
          className="flex items-center gap-2 text-white bg-slate-700 px-2 py-1 rounded-md"
          onClick={() => setShowMenu(!showMenu)}
        >
          <span>{selectedLanguage.code === "bn" ? "BN" : "EN"}</span>
        </button>
        {showMenu && (
          <div className="absolute border border-slate-700 right-0 top-full mt-5 w-40 rounded-md dark:bg-body bg-slate-700 dark:text-white text-white p-2 z-10 shadow-lg">
            {languages.map((entry) => (
              <li
                key={entry.code}
                onClick={() => handleLanguageChange(entry.code)}
                className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-dark"
              >
                {entry.language}
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
