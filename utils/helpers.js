export const APP_STORAGE_KEY = 'darb:app'

export const generateValidationCode = parseInt(
  Math.random()
    .toString(10)
    .substring(7)
)
  .toString()
  .slice(0, 5)
