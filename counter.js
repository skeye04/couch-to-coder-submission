let rounds = []
let round = 0
let stitch = 0
let stitchEl = document.getElementById("stitch-el")
let prevEl = document.getElementById("prev-el")
function newStitch(){
    stitch = stitch + 1
    stitchEl.textContent = "Stitches : " + stitch
}
function newRound(){
    round = round + 1
    let prevs = document.createElement('h1')
    prevs.textContent = "Round " + round + " : " + stitch
    prevEl.appendChild(prevs)
    stitch = 0
    stitchEl.textContent = "Stitches : " + stitch
   
}