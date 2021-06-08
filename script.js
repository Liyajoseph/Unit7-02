document.getElementById('button').addEventListener('click', comparison)
let userinput = 0

function comparison () {
  userinput = document.getElementById('input').value
  userinput = parseInt(userinput)

  if (userinput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
    document.getElementById('answer').innerHTML = 'Positive'
  }
}
