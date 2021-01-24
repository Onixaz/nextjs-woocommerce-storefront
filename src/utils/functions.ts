//node-fetch self signed cert fix for getStaticProps
//https://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request/21961005#21961005
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
export const API_KEY: any = process.env.NEXT_PUBLIC_WOO_CONSUMER_KEY
export const API_SECRET: any = process.env.NEXT_PUBLIC_WOO_CONSUMER_SECRET

export const fetcher = async (url: string, key: string, secret: string) => {
  return fetch(url, {
    headers: new Headers({
      Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64'),
      'Content-Type': 'application/json; charset=utf-8',
    }),
    credentials: 'include',
    mode: 'cors',
  })
}

export const poster = async (url: string, key: string, secret: string, data: object) => {
  return fetch(url, {
    headers: new Headers({
      Authorization: 'Basic ' + Buffer.from(`${key}:${secret}`).toString('base64'),
      'Content-Type': 'application/json; charset=utf-8',
    }),
    method: 'POST',
    body: JSON.stringify(data),
    credentials: 'include',
    mode: 'cors',
  })
}
