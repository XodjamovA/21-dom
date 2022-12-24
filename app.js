let arr = [
    {
        name: 'Mazda RX-8',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2006
    },
    {
        name: 'Mazda',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2007
    },
    {
        name: 'Mazda RX-7',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2022
    },
    {
        name: 'Mazda RX-6',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2014
    },
    {
        name: 'Mazda RX-5',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2020
    },
    {
        name: 'Mazda RX-4',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2008
    },
    {
        name: 'Mazda RX-4',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2001
    },
    {
        name: 'Mazda RX-3',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2002
    },
    {
        name: 'Mazda RX-2',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2006
    },
    {
        name: 'Mazda RX-9',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2018
    },
    {
        name: 'Mazda RX-8',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2021
    },
    {
        name: 'Mazda RX-4',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 2011
    },
    {
        name: 'Mazda RX-5',
        VIN: 'VIN:JTJBARBZ2F2356837',
        Year: 1989
    }
]

let cont1 = document.querySelector('.container1')
let cont2 = document.querySelector('.container2')
let cont3 = document.querySelector('.container3')
let body = document.body
// for (let i = 0; i <= arr.length; i++) {
function car(data) {
    let box = document.createElement('div')
    let h3 = document.createElement('h3')
    let p = document.createElement('p')
    let p1 = document.createElement('p')
    let btn = document.createElement('button')
    let a = document.createElement('a')

    box.classList.add('box')
    h3.classList.add('h3')
    p.classList.add('p')
    p1.classList.add('p')
    btn.classList.add('btn')
    a.classList.add('a')
    a.href = "#"

    for (let item2 of arr) {
        h3.innerHTML = item2.name
        p.innerHTML = item2.VIN
        p1.innerHTML = item2.Year
        btn.innerHTML = 'Подробнее'
        a.innerHTML = "Показать еще 12 автомобилей"
        if (item2.Year >= 2015) {
            cont1.append(box)
        }
        else if (item2.Year >= 2005) {
            cont2.append(box)
        }
        else if (item2.Year < 2007) {
            cont3.append(box)
        }
    }

    body.append(cont1, cont2, cont3)
    box.append(h3, p, p1, btn)
}
// }
car(arr)