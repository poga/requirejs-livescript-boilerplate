define [], ->
  console.log "It Works!"
  body = document.getElementsByTagName("body")[0]
  body.innerHTML = "<h1>It Works!</h1>"
  console.log "Prelude: #{sum [1 to 3]}"
