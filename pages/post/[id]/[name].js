import { useRouter } from 'next/router'
import React from 'react'

const Post = () => {
    const router  = useRouter();

    const {id,name} = router.query;
  return (
    <div>Post:{id}: {name}</div>
  )
}

export default Post