const squares = [
    {
        className: 'Red_square',
        styles: {
            backgroundcolor: 'red',
        }
    },
    {
        className: 'Yellow_square',
        styles: {
            backgroundcolor: 'yellow',
            color: 'black',
        }
    },
    {
        className: 'Indigo_square',
        styles: {
            backgroundcolor: 'indigo',
            color: 'white',
        }
    },
    {
        className: 'Magenta_square',
        styles: {
            backgroundcolor: 'magenta',
         }
    }
 ];

const styleElements = (elements) => {
    elements.forEach((item) => {
        const dom_elements = document.getElementsByClassName(item.className);
        for (let i = 0; i < dom_elements.length; i++){
            const el = dom_elements[i];
            for (let j in item.styles){
                el.style[j] = item.styles[j];
            }
        }
    })
};
styleElements(squares);
