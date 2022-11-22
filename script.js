const consoleInput = document.querySelector(".console-input")
const historyContainer = document.querySelector(".console-history")

function addResult(inputAsString = "", output) {
  const outputAsString = output instanceof Array ? `[${output.join(", ")}]` : JSON.stringify(output)
  const inputLogElement = document.createElement("div")
  const outputLogElement = document.createElement("div")

  inputLogElement.classList.add("console-input-log")
  outputLogElement.classList.add("console-output-log")

  inputLogElement.textContent = `JS> ${inputAsString}`
  outputLogElement.textContent = outputAsString

  historyContainer.append(inputLogElement, outputLogElement)
}

addResult("\"This is a javascript console made by Muhtasim. This console shows only the return values.\"", eval("\"This is a javascript console made by Muhtasim. This console shows only the return values.\""))

consoleInput.addEventListener("keyup", (e) => {
  const code = consoleInput.value.trim()

  if (code.length === 0) {
    return
  }

  if (e.key === "Enter") {
    try {
      addResult(code, eval(code))
    } catch (err) {
      addResult(code, err)
    }

    consoleInput.value = ""
    historyContainer.scrollTop = historyContainer.scrollHeight
  }
})
