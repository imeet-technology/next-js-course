import { useRouter } from 'next/router'
import React from 'react'

const User = () => {
    const router  = useRouter();

    const {id} = router.query;
  return (
    <div>User:{id}</div>
  )
}

export default User