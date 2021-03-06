// Source: https://medium.freecodecamp.org/you-might-not-need-react-router-38673620f3d

import toRegex from 'path-to-regexp';

function matchURI(path, uri) {
   const keys = [];
   const pattern = toRegex(path, keys); // TODO: Use caching
   const match = pattern.exec(uri);
   if (!match) return null;
   const params = Object.create(null);
   for (let i = 1; i < match.length; i++) {
      params[keys[i - 1].name] =
         match[i] !== undefined ? match[i] : undefined;
   }
   return params;
}

function resolve(routes, context) {
   for (const route of routes) {
      const uri = context.error ? '/error' : context.pathname;
      const params = matchURI(route.path, uri);
      if (!params) { 
         continue;
      }
      const result = route.action({ ...context, params });
      if (result) {
         return result;
      }
   }
   const error = new Error('Not found');
   error.status = 404;
   throw error;
}

export default { resolve };