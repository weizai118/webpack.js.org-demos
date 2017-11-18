function component() {

  var element = document.createElement('div');

//  const join = function (array, str) {
//    return array.join(str)
//  }

  this.alert('Hmmm, this probably isn\'t a great idea...')

  element.innerHTML = join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());