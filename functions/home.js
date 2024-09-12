const expandirTemas = () =>{

    const liExpansive = document.getElementById('expandable')    
    const liExpansive2 = document.getElementById('expandable2')
    const lihidden = document.getElementById('inicial')

    liExpansive.classList.add('expanded')
    liExpansive2.classList.add('mostrarmierda')
    lihidden.classList.add('no-expanded')
}

const retraerTemas = () =>{
    const liExpansive = document.getElementById('expandable')
    const liExpansive2 = document.getElementById('expandable2')
    const lihidden = document.getElementById('inicial')
    
    liExpansive.classList.remove('expanded')
    liExpansive2.classList.remove('mostrarmierda')
    lihidden.classList.remove('no-expanded')
}