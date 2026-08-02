import { defineMiddleware } from 'astro:middleware';
import { terminal } from '@/lib/terminal';

const terminalClient = /^(curl|wget|httpie|xh)\//i;

export const onRequest = defineMiddleware(async (ctx, next) => {
  const userAgent = ctx.request.headers.get('user-agent') ?? '';

  if (ctx.url.pathname === '/' && terminalClient.test(userAgent)) {
    return new Response(terminal, {
      headers: {
        'content-type': 'text/plain; charset=utf-8',
        vary: 'user-agent'
      }
    });
  }

  return next();
});
