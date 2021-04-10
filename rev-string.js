const rev = str => {
  if (typeof str === 'string') {
    return str.split('').reduce((r, c)=> c + r, '');
  } else {
    return ''
  }
}

console.log(rev('code'));

module.exports = rev
