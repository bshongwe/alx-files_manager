import express from 'express';

/**
 * Adds middlewares to express app
 * @param {express.Express} api The express app
 */
const injectMiddlewares = (api) => {
  api.use(express.json({ limit: '200mb' }));
};

export default injectMiddlewares;
