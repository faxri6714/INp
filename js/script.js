let doc = document
let sec = doc.querySelectorAll('input')
let in1 = doc.querySelectorAll('.in')
let but = doc.querySelector('.but')
let r1 = doc.querySelectorAll('.r1')
let need = doc.querySelectorAll('.need')
let t = doc.querySelectorAll('.t')
let n3 = doc.querySelector('.n3')
let n4 = doc.querySelector('.n4')
let d = doc.querySelector('.d')


let r = 0
let l = 12
let form = doc.querySelector('form')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    let r2 = []
    let r3 = []


    for (let i of sec) {
        if (i.value != "") {
            r2.push(i)
            r = r2.length
            n3.innerHTML = r

        }

        else {
            r3.push(i)
            l = r3.length
            n4.innerHTML = l
        }
    }

    let p1 = []
    for (let i of in1) {

        if (i.value != "") {
            i.style.borderColor = 'blue'
            i.nextElementSibling.style.color = 'blue'
            i.previousElementSibling.style.color = 'blue'
            p1.push(i.value)
            if (p1.length == 7) {
                const formData = new FormData(event.target);
                const dad = Object.fromEntries(formData.entries());
                console.log(dad);
                let top = JSON.stringify(dad)
                console.log(top);
            }
        }
        else {
            i.nextElementSibling.style.color = 'red'
            i.style.borderColor = 'red'
            i.previousElementSibling.style.color = 'red'

        }
    }
})





