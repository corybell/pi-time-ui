const host = "http://localhost:5000"

export async function hydrate() {
  const response = await fetch(`${host}/hydrate`)
  return await response.json()
}

export async function putRelay(id, data) {
  return await fetch(`${host}/relay/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}
