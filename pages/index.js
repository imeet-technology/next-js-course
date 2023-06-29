
import Link from 'next/link';
import React, { useState } from 'react'

const Index = () => {
  const [state,setState] = useState();
  
  return (
    <>    
  
    
        <h1>This is Home Page</h1>
      <nav>
        <ul>
       
          <li><Link href={'/contact'} >contact</Link></li>
        </ul>
      </nav>
        
    </>

  )
}

export default Index