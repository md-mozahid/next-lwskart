"use client";

import { useState } from "react";

export default function Profile({ session }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      {session?.user && (
        <>
          <div className="flex gap-4 items-center">
            <div className="relative">
              <span
                onClick={() => setShowMenu(!showMenu)}
                className="text-white dark:text-white rounded-full border border-slate-700 size-10 flex items-center justify-center cursor-pointer"
              >
                {session?.user?.name?.charAt(0)}
              </span>
              {showMenu && (
                <div className="absolute text-white border border-slate-700 right-0 top-full mt-5 w-40 rounded-md dark:bg-body bg-slate-700 dark:text-white  p-2 z-10 shadow-lg">
                  <ul>
                    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-dark">
                      Name
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-dark">
                      Email
                    </li>
                    <li className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-slate-600 hover:text-dark">
                      Account
                    </li>
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
