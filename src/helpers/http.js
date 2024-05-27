export async function call({ uri, method = "GET", body = undefined, headers = {} }) {
    const url = `http://localhost:9763/${uri}`
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
    }
  
    if (body) options.body = JSON.stringify(body);
  
    return fetch(url, options)
      .then(async response => {
        if (!response.ok || response.error) return response.json().then(error => { throw error})
        if (response.status == 204) return response.text()
        return response.json()
      })
      .catch(error => { throw error })
  }
  