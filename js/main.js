// Question array
const questions = [
    {question: 'Enter your username'},
    {question: 'Enter your main character'},
    {question: 'Enter your Email', pattern: /\S+@\S+\.\S+/},
    {question: 'Create a password', type: 'password'}
];

// Transition times
const skateTime = 100; // Shake transition time
const switchTime = 200; //Transition between questions

//Init position at first question
let position = 0;

//Init DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');

// Events

document.addEventListener('DOMContentLoaded' , getQuestion);

//Functions

// Get questions from Array & add to markup
function getQuestion(){
    //Get current question
    inputLabel.innerHTML = questions[position].question;
    // Get current Type
    inputField.type = questions[position].type || 'text';
    // Get the current answer
    inputField.value = questions[position].answer || '';
    // Focus on element
    inputField.focus();

    // Set Progress Bar Width - Variable questions length
    progress.style.width = (position * 100) / questions.length + '%';

    // Add user icon or back Arrow depending on question
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

    showQuestion();
}

// Display question to user

function showQuestion(){
    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '' ;
    inputProgress.style.width = '100%';
}