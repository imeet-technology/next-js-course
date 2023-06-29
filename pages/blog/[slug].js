import { useRouter } from 'next/router'
import React from 'react'

const User = () => {
    const router  = useRouter();

    const {slug} = router.query;
  return (
    <div>i want {slug} this blog</div>
  )
}

export default User