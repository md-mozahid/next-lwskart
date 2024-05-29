"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Profile({ session }) {
  const [show, setShow] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target))
        setShow(false);
    };
    document.addEventListener("mousedown", handleClickOutSide);

    //  clean
    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, []);

  return (
    <>
      {session?.user && (
        <>
          <div className="flex gap-4 items-center" ref={profileRef}>
            <div className="relative">
              <span
                onClick={() => setShow(!show)}
                className="text-white dark:text-white rounded-full border border-slate-700 size-10 flex items-center justify-center cursor-pointer"
              >
                {session?.user?.name?.charAt(0)}
              </span>
              {show && (
                <div className="absolute text-white border border-slate-700 right-0 top-full mt-5 w-64 rounded-md dark:bg-body bg-slate-700 dark:text-white  p-2 z-10 shadow-lg">
                  <ul>
                    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white">
                      Name: {session?.user?.name}
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white">
                      Email: {session?.user?.email}
                    </li>
                    <Link href="/account">
                      <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-white">
                        Account
                      </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
          <span className="mx-2 text-white">|</span>
        </>
      )}
    </>
  );
}
