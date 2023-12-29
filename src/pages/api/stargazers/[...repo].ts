import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const { repo } = req.query as { repo: string[] }
  if (repo.length != 2) res.status(400).json({ message: 'Bad request' })
  const repoURI = `https://api.github.com/repos/${repo[0]}/${repo[1]}`
  const ghresponse = await fetch(repoURI)
  const data = await ghresponse.json()
  if (!Object.hasOwn(data, 'stargazers_count'))
    res.status(500).json({ message: 'GitHub API response was not as expected' })
  res.status(200).json({ message: data.stargazers_count })
}
