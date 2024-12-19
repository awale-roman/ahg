 export const capitalizeFirstLetter = (stringVal:string) => {
    return stringVal.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ')
  }

