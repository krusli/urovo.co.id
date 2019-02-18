// Vue SSR
const Vue = require('vue');
const fs = require('fs');

const getTemplate = filename =>
  fs.readFileSync(`./templates/${filename}`, 'utf-8');

const renderer = require('vue-server-renderer').createRenderer({
  template: getTemplate('index.template.html')
});

const render = async (app, res, context) => {
  try {
    let html;
    if (context) {
      html = await renderer.renderToString(app, context);
    } else {
      html = await renderer.renderToString(app);
    }
    res.send(html);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error')
  }
}

/* Express server */
const express = require('express');
const helmet = require('helmet');

// setup Express server
const server = express();
server.use(helmet());

server.get('*', async (req, res) => {
  const app = new Vue({
    data: {
      url: req.url
    },
    template: '<div>Hello world.</div>'
  });

  const context = {
    title: 'Hello World'
  }
  
  render(app, res, context);
});

const port = 8080;
server.listen(port);
