export async function call({ uri, method = "GET", body = undefined }) {
  // console.log('consulta a la db');
    const url = `http://localhost:9763/${uri}`
    const options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    }
  
    if (body) options.body = JSON.stringify(body);
  
    return fetch(url, options)
      .then(async response => {
        if (!response.ok || response.status === 401) return response.json().then(error => { throw error})
        return response.json()
      })
      .catch(error => { throw error })
  }
  