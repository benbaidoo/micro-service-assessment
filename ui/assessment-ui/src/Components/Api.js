import React, { useState } from 'react'
import './Api.css';

const Api = ({
  framework,
  endpoint,
  url,
  port,
}) => {
  const [responseData, setResponse] = useState('')

  const formatUrl = () => `http://${url}:${port}${endpoint}`

  const runApi = async (url) => await (await fetch(url)).json()
  
  const onClick = async () => {
    const data = await runApi(formatUrl())
    console.log(data)
    setResponse(data)
  }

  return (
    <div className="backend-api" id={`backend-api-${framework}`}>
      <h3>{framework}</h3>
      <p>The {framework} backend is running at {url} on port {port}.
      It supports the {endpoint}.</p>
      <button
        onClick={onClick}
      >Try it Out</button>
      <br></br>
      <br></br>
      <br></br>
      <div id={`response-output-${framework}`}>
        {responseData}
      </div>
    </div>
  )
}

export default Api
