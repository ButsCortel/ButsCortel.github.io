const showContent = (target) => {
    const {id} = target;
    const lis = document.getElementsByClassName("aboutLis");
    const elements = document.getElementsByClassName("aboutDivs");
    for (let i = 0; i < elements.length; i++) {
        
        const element = elements[i];
        const li = lis[i];
        if (id == i) {
            li.style.borderBottom = "2px gray solid"
            element.style.display = "block"
            
        }
        else {
            li.style.borderBottom = "none"
            element.style.display = "none"
        }
        
    }
}