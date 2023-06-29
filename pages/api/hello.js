// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if(req.method === 'POST')
  {
    res.status(200).json({ name: 'Krishna' })
  }
  else{
    res.status(400).json({ msg: `the method can not support ${req.method}` })
  }
}
