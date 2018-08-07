export const loggingMiddleware = (store) => (next) => (action) => {
  console.info(`Redux log action:`, action)
  next(action)
}