import { Copyright } from 'lucide-react'
import React from 'react'

function FooterCredits() {
  return (
    <>
    <div className="w-full my-3 px-4">
    <div className="h-px bg-gray-300"></div>
  </div>

  {/* "All Rights Reserved" */}
  <div className="w-full flex justify-between items-center px-4">
    {/* All Rights Reserved */}
    <span className="flex items-center text-gray-700 font-grotesk text-body-5 lg:text-body-4">
      <Copyright className="w-3 h-3 mr-2" /> {new Date().getFullYear()} All Rights Reserved
    </span>

    {/* Website by Him */}
    <span className="text-gray-700 font-grotesk text-body-5 lg:text-body-5">
      Website by
      <a
        href="https://manishraj.me"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline ml-1"
      >
        this guy
      </a>
    </span>
  </div>
    </>
  )
}

export default FooterCredits