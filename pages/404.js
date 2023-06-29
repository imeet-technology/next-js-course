import { useRouter } from 'next/router'
import React from 'react'

const Errror = () => {
    const router= useRouter();
  return (
    <div>
<h1>Page not found</h1>
        <button  onClick={()=>router.back()} className="px-12 py-3 rounded-md bg-indigo-600 text-white">
            Back
        </button>
    </div>
  )
}

export default Errror