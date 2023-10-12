// Kung Fu Panda

// Button Event Listener
document.getElementById("search-btn").addEventListener("click", btnClicked);

function btnClicked() {
  //Get Search Input

  let name = document.getElementById("search-in").value.toLowerCase();
  console.log(name);

  //Test the Search Name -Unary
  if (
    name === "urva" ||
    name === "urva javaid" ||
    name === "urva" ||
    name === "urva javaid"
  ) {
    document.getElementById("char-info").innerHTML = `
        <img src="images/po.png" alt="kung fu panda character" />
        <h2>Urva Javaid</h2>
       <p class="quote">"(insert choice words)"</p> <p class="quote">"Redacted"</p>
        <p class="quote">"@!%#"</p>
        

    `;
  } else if (
    name === "anidita" ||
    name === "anidita gupta" ||
    name === "gupta" ||
    name === "anion"
  ) {
    document.getElementById("char-info").innerHTML = `
        <img src="images/trhd.jpg";
        " alt="Old Scona Academic School" width="550px"/>
        <h2>Anidita Gupta</h2>
        <p class="quote">"I hate OSA."</p>
        <p class="quote">"I have so much homework!"</p>
        <p class="quote">"I'm reading, bye."</p>
        <p class="quote">"I have a spare, I'll do my homework then."</p>

`;
  } else if (
    name === "elona bostoen" ||
    name === "elona" ||
    name === "bostoen"
  ) {
    document.getElementById("char-info").innerHTML = `
        <img src="images/mantis.png" alt="kung fu panda character" />
        <h2>Mantis</h2>
        <p class="quote">"Fear the bug!"</p>
`;
    //   } else if (name === "monkey") {
    //     document.getElementById("char-info").innerHTML = `
    //         <img src="images/monkey.png" alt="kung fu panda character" />
    //         <h2>Monkey</h2>
    //         <p class="quote">"No. Literally."</p>
    //         <p class="quote">"Yeah."</p>
    // `;
  } else if (
    name === "fatima" ||
    name === "fatima kamil" ||
    name === "kamil" ||
    name === "amazing" ||
    name === "fatima rehan kamil" ||
    name === "fatima rehan kamil zaki" ||
    name === "fatu"
  ) {
    document.getElementById("char-info").innerHTML = `
        <img src="images/tigress.png" alt="kung fu panda character" />
        <h2>Fatima Kamil</h2>
        <p class="quote">"Amazing"</p>
 `;
    //   } else if (name === "viper") {
    //     document.getElementById("char-info").innerHTML = `
    //         <img src="images/viper.png" alt="kung fu panda character" />
    //         <h2>Viper</h2>
    //         <p class="quote">"I don't need to bite to fight!"</p>
    // `;
  } else {
    document.getElementById("char-info").innerHTML = `
    <img src="images/question-mark.png" alt="Question Mark" width="100px" />
    <h2>?????</h2>
    <p class="quote">----------</p>
    `;
  }
}
