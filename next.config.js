/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  //   prependData: `@import "main.scss";`
  // },

  env: {
    API_URL : '192.168.137.200:2727/api/',
    local_Url : 'http://localhost:3000'
  },
}
