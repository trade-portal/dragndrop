export function getRandomId() {
  const randomNumber = Math.random()
  if (randomNumber < 0.1) {
    return getRandomId()
  } else {
    return (randomNumber*1e32).toString(36).substring(0, 11)
  }
}

export function objectIsEmpty(obj) {
  return (Object.keys(obj).length === 0 && obj.constructor === Object)
}
