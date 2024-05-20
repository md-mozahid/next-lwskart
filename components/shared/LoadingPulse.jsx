export default function LoadingPulse() {
  return (
    // <div className="container">
    //   <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
    //     <div className="animate-pulse flex space-x-4">
    //       <div className="rounded-full bg-slate-700 h-10 w-10"></div>
    //       <div className="flex-1 space-y-6 py-1">
    //         <div className="h-2 bg-slate-700 rounded"></div>
    //         <div className="space-y-3">
    //           <div className="grid grid-cols-3 gap-4">
    //             <div className="h-2 bg-slate-700 rounded col-span-2"></div>
    //             <div className="h-2 bg-slate-700 rounded col-span-1"></div>
    //           </div>
    //           <div className="h-2 bg-slate-700 rounded"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  )
}
