export const environment = {
  production: true,
  apiKey: process.env['API_KEY'] || 'defaultValue',
  apiUrl: 'https://api.giphy.com/v1/gifs/search?api_key=',
};
