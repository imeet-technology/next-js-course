import React from 'react'

const Index = (props) => {
    console.log("props",props);
  return (
    <div>Krishna: {props?.repo?.merges_url
    }</div>
  )
}

export const getServerSideProps = async (context) => {
    console.log("context",context.params);
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const repo = await res.json()
    return { props: { repo } }
  }

export default Index