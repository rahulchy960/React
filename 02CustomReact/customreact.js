// function customRender(reactElement, mainContainer){ // a template function to append a child in root
//     const domElement = document.createElement(reactElement.type);  // create A new dom element based on the react element type 
//     domElement.innerHTML = reactElement.children;   // text to show in the innerhtml
//     domElement.setAttribute('href', reactElement.props.href);  // set attributes in the <a> tag from react element propertices
//     domElement.setAttribute('target', reactElement.props.target);
//     mainContainer.appendChild(domElement);
// }

function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}

const mainContainer = document.querySelector('#root');  // jemon react a root theke element add start hoy

const reactElement = {                     // akta custom react element based on a tag
    type : 'a',
    props : {
        href : 'https://www.google.com/',
        target : '_blank'
    },
    children : 'Click me to visit google'
};

customRender(reactElement, mainContainer);  // to render the element in root