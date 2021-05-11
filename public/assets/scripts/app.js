const aboutSystem = document.getElementById('span01');
const instruction = document.getElementById('span02');
const userArea = document.getElementById('span03');
const keepContact = document.getElementById('span04');
const privacity = document.getElementById('span05');
 //const startOperatorButton = document.querySelector('header button');
const addOperatorModal = document.getElementById('add-modal'); 
const backdrop = document.getElementById('backdrop');
const cancelAddOperatorButton = addOperatorModal.querySelector('.btn--passive');

const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
    };

const cancelAddOperator = () => {
    toggleOperatorModal();
};

const backdropClickHandler = () => {
    toggleOperatorModal();
};

const toggleOperatorModal = () => {//function model(){}
      addOperatorModal.classList.toggle('visible'); //this method classList.toggle avoid error when it�s visible
      toggleBackdrop();
};


function toogleSpan(value){
   var code = value.substr(0, 2)
   var name = value.substr(2, (value.length))
   
  if (code ==='01'){
      addOperatorModal.classList.toggle('visible'); //this method classList.toggle avoid error when it�s visible
      toggleBackdrop();
      
  }
  if (code ==='02'){
    //window.location.replace("https://js-posts.herokuapp.com");
    window.location.replace("access_fin.html");

  }

}

aboutSystem.addEventListener('click', event => {
  toogleSpan(aboutSystem.textContent)
});

instruction.addEventListener('click', event => {
  toogleSpan(instruction.textContent)
});

userArea.addEventListener('click', event => {
  toogleSpan(userArea.textContent)
});

keepContact.addEventListener('click', event => {
  toogleSpan(keepContact.textContent)
});

privacity.addEventListener('click', event => {
  toogleSpan(privacity.textContent)
});

 //startOperatorButton.addEventListener('click', toggleOperatorModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddOperatorButton.addEventListener('click', cancelAddOperator);