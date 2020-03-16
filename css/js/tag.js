document.querySelectorAll('.tag').forEach(box=>{
    //aqui eu pego o nome da tag
    const tagName = box.tagName.toLowerCase()
    box.style.borderColor = '#616161'
    if(!box.classList.contains('nolabel')) {
        const label = document.createElement('label')
        label.style.backgroundColor = '#616161'
        label.innerHTML = tagName
        box.insertBefore(label, box.childNodes[0])
    }
})