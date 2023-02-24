# Module federation shared library with peer dependency issue

- `app1` is the host application.
- `app2` standalone application which exposes `Button` component.
- `app3` standalone application which exposes `Button` component.

# Running Demo

Run `yarn` and `yarn start`. This will serve `app1`, `app2` and `app3` on ports 3001, 3002 and 3003 respectively.

- [localhost:3001](http://localhost:3001/) (HOST app1)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE app2)
- [localhost:3003](http://localhost:3003/) (STANDALONE REMOTE app3)
