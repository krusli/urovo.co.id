// Vue SSR
const Vue = require('vue')
const renderer = require('vue-server-renderer').createRenderer()

// server dependencies
const express = require('express');
const helmet = require('helmet');

// setup Express server
const server = express();
server.use(helmet());

const render = async (app, res) => {
  try {
    const html = await renderer.renderToString(app);
    res.send(html);
  } catch (err) {
    res.status(500).send('Rendering error')
  }
}

server.get('*', async (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: `<div>The visited URL is: {{ url }}</div>`
  })
  render(app, res);
});

const port = 8080;
server.listen(port);
