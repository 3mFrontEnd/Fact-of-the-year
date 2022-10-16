let factBox = document.querySelector("#fact-box")

// getting a random fact from API
async function getYearFact (year="random") {
    year = year ? year : "random"
    let response = await fetch(`http://numbersapi.com/${year}/year`)
    let data = await response.text()
    factBox.textContent = data
    factBox.className = "alert alert-success"
}

let form = document.querySelector("form")
form.addEventListener("submit", e => {
    e.preventDefault()
    getYearFact(e.target.number.value)
})
