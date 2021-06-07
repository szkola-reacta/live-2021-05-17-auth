import { rest } from 'msw';
import jwt from 'jsonwebtoken';

export const handlers = [
  // rest.post('/login', (req, res, ctx) => {
  //   const { email, password } = req.body;

  //   if (email === 'foo@bar.com' && password === 'example') {
  //     return res(
  //       ctx.status(200),
  //       ctx.set({
  //         'x-access-token': jwt.sign(
  //           {
  //             email: 'foo@bar.com',
  //             isAdmin: false,
  //             hasSubscription: false,
  //           },
  //           'secret:-)',
  //         ),
  //       }),
  //       ctx.json({
  //         id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
  //         email,
  //         firstName: 'Jan',
  //         lastName: 'Kowalski',
  //       }),
  //     );
  //   }
  //   return res(ctx.status(401), ctx.json({ error: 'Not authorized' }));
  // }),

  rest.get('/me', (req, res, ctx) => {
    return res(
      ctx.status(200),
      // ctx.status(403),
      // ctx.json({
      //   firstName: 'John',
      //   lastName: 'Maverick',
      // }),
    );
  }),

  rest.post('/logout', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 'ok',
      }),
    );
  }),
];
