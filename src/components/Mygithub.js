import { useState, useEffect } from 'react'

const API_URL = 'https://api.github.com/users'
const API_TOKEN = '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'
const user = 'r0leksii'

function MyGithub() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchGithub() {
      try {
        const response = await fetch(`${API_URL}/${user}/repos`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`,
          },
        })
        if (response.ok) {
          const json = await response.json()
          setData(json)
        } else {
          throw new Error('Error fetching data')
        }
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }
    fetchGithub()
  }, [])

  return (
    <div>
      <h2>My Github</h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <ul>
        {data.map((repo) => (
          <li key={repo.id}>
            <h3>{repo.name}</h3>
            {repo.description && <p>{repo.description}</p>}
            <a href={repo.html_url}>{repo.html_url}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MyGithub
