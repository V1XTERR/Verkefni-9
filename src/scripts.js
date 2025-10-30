// TODO leit í API
// TODO Sýna niðurstöður á síðunni
import  { el, empty }  from "../src/lib/elements.js";


const artSearcher = document.querySelector('.art-searcher');

const statusElement = el('p', {}, "Sláðu inn leitarorð til að byrja")

const resultsElement = el('ul')
const resultElement = el('div', {}, statusElement, resultsElement) 


const inputElement = document.createElement
('input')
inputElement.setAttribute('name', 'query')

/**
 *
 *  @param {SubmitEvent} e  Form submit event.
 * 
 */


function onSubmitHandler(e) {
    e.preventDefault();
    empty(resultsElement);



    const query = inputElement.value;

    statusElement.textContent = `Leitað að: ${query}...`;

    const resultitems = el('li', {}, "Leitaði að" + query)
    resultsElement.appendChild(resultitems)
}

const fromElement = el(
    "form",
    {submit: onSubmitHandler},
    el("label", {}, "Leitarorð:"),
    inputElement,
    el("button", {type: "submit"}, "Leita")
);

artSearcher?.appendChild(fromElement);
artSearcher?.appendChild(resultsElement);