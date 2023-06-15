window.onload = function() {
    const form = document.querySelector("form");
    form.onsubmit = function(event) {
      event.preventDefault();

      const question1 = parseInt(document.querySelector("input[name='question1']:checked").value);
      const question2 = parseInt(document.querySelector("input[name='question2']:checked").value);
      const question3 = parseInt(document.querySelector("input[name='question3']:checked").value);
      const question4 = parseInt(document.querySelector("input[name='question4']:checked").value);
      const question5 = parseInt(document.querySelector("input[name='question5']:checked").value);
      const result = question1 + question2 + question3 + question4 + question5;

      const javascript = document.getElementById("javascript");
      const cSharp = document.getElementById("c#");
      const python = document.getElementById("python");
      const reset = document.getElementById("reset");

      if (result >= 24) {
            python.removeAttribute("class");
            form.setAttribute("class", "hidden");
            reset.removeAttribute("class");
      } else if (result >= 17) {
            javascript.removeAttribute("class");
            form.setAttribute("class", "hidden");
            reset.removeAttribute("class");

      } else if (result >= 10) {
            cSharp.removeAttribute("class");
            form.setAttribute("class", "hidden");
            reset.removeAttribute("class");
    }

    let resetBtn = document.querySelector("button#reset");
    resetBtn.addEventListener("click", function() {
        window.location.reload()
    });

    const nameInput = document.getElementById("nameInput").value;
    document.querySelector("span#nameOutput").innerText = nameInput;



}
}


//points: 
/* C# - 10 to 16 
JS - 17 to 23
Python - 24 to 30*/
