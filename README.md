# Getting Started

Project developed in React + Typescript + Graphql.
Based in: [Case](https://docs.google.com/document/d/1t2NDJ1-HnL0Jp7ZaqDeYi2OVAfworO4fv1olcUJkUJ4/edit)

# Dependencies

* [Docker](https://docs.docker.com/engine/install/ubuntu/)

If prefer, you can run without docker. For that, you need these dependencies:

* [NPM]: `sudo apt install npm`
* [Node 10](https://nodejs.org/en/download/package-manager/)

# Configurating ENV's

Create a copy from `.env.dev` and change name to `.env`.

You should use it like this if you want to upload only the `frontend` on `localhost`:

```bash
REACT_APP_GRAPHQL_URL=https://app-login-andersonrosty.herokuapp.com
```

# Docker build

To build image execute this command: `docker build -t login .`.

# Execute without docker

To execute without docker, its simple:

In project paste:
 - `yarn install && yarn run dev`

# Execute tests

To execute tests run: yarn test

# Developing

To view develop access `http://localhost:3000`

# Production

This application run in [Login](https://login-react-andersonrosty.herokuapp.com/)