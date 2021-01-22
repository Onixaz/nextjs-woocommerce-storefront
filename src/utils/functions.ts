export const fetcher = async (url: string, username: string, password: string) => {
  return fetch(url, {
    headers: new Headers({
      Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
      'Content-Type': 'application/json; charset=utf-8',
    }),
    credentials: 'include',
    mode: 'cors',
  })
}
