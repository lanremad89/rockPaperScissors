//declare a varible and let it target the options class in the HTML
const options = document.querySelectorAll(".options");

    options.forEach((option) => {
      option.addEventListener("click", function () {

        // the this keyword refers to the button that was clicked 
        const pInput = this.innerHTML;

        //  this varible holds an array for computer options
        const cOptions = ["Rock", "Paper", "Scissors"];

        // this variable will be used to randomly choose computers options
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        // call function inside eventListener 
        compareInputs(pInput, cInput);
      });
    });

    function compareInputs(pInput, cInput) {
      const currentMatch = `${pInput} vs ${cInput}`;

      // Tie check
      if (pInput === cInput) {
        alert(`${currentMatch} is a Tie`);
        return;
      }

      // Rock
      if (pInput === "Rock") {
        if (cInput === "Scissors") {
          alert(`${currentMatch} = You Win`);
        } else {
          alert(`${currentMatch} = Computer Wins`);
        }
      }
      // Paper
      else if (pInput === "Paper") {
        if (cInput === "Rock") {
          alert(`${currentMatch} = You Win`);
        } else {
          alert(`${currentMatch} = Computer Wins`);
        }
      }
      // Scissors
      else if (pInput === "Scissors") {
        if (cInput === "Paper") {
          alert(`${currentMatch} = You Win`);
        } else {
          alert(`${currentMatch} = Computer Wins`);
        }
      }
    }