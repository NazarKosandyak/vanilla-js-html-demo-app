// ДОСТУП ДО ЕЛЕМЕНТІВ

const GET_TOP = document.querySelector('.top')
const BLOCK_EDIT = document.querySelector('.block-edit')
const STYLE_BLOCK = document.querySelector('.block-style');
const GET_AREA = document.querySelector('.area')
const GET_CONTENT = document.querySelector('.content')

const GET_EDIT = document.querySelector('.edit')
const GET_STYLE = document.querySelector('.style')
const GET_ADD = document.querySelector('.add')
const GET_SAVE = document.querySelector('.save')

const GET_RADIO = document.querySelector('.radio')

const GET_CLR_CHOOSE = document.querySelector('.color_of_text')
const setColor = document.querySelectorAll('.setColor')

const GET_CHANGE_BGC = document.querySelector('.background_text')
const GET_BOX = document.querySelector('.choose_color')
const GET_BOX_BGC = document.querySelector('.choose_bgc')

const GET_TYPE_TEXT = document.querySelector('.type_text')
const GET_CHECKBOX = document.querySelectorAll('.type')

const GET_ADD_ELEM = document.querySelector('.add-elem')

const close_BTN = document.querySelector('.close_box')
const GET_FORM = document.forms.custom


const  getFORM = document.forms.add_table
const FORM_ADD_LIST = document.forms.add_list
// ДОСТУП ДО НОВОСТВОРЕНИХ ЕЛЕМЕНТІВ

const GET_TABLE = document.querySelector('.create-table')
const GET_LIST = document.querySelector('.create-list')



// РОБОТА З TEXTAREA

GET_EDIT.addEventListener('click', function () {
    BLOCK_EDIT.classList.add("show")
    GET_AREA.value = GET_TOP.innerHTML
    STYLE_BLOCK.classList.remove('show')
})



//  РОБОТА З STYLE_BLOCK

//Тут просто роблю появу одного блоку, пропажу іншого 

GET_STYLE.addEventListener('click', function () {
    STYLE_BLOCK.classList.add('show')
    BLOCK_EDIT.classList.remove("show")

})

// при зміні написано  в textarea  буде мінятися вміст <p>
GET_SAVE.addEventListener('click', function () {
    BLOCK_EDIT.classList.remove("show")
    GET_TOP.innerHTML = GET_AREA.value


})



// зміна розмірів шрифта
//Міняю тип шрифта за допомогою radio ,роблю делегування події , тому при кліку на елемент, буде діставатися потрібний  , і через нього
// буду взаємодіяти з параграфами

GET_RADIO.addEventListener('click', function (e) {
    if (e.target.classList.contains('rad')) {
        GET_TOP.style.fontSize = e.target.value
    }
})

// зміна типу шрифта
// section має властивість options , тому за допомогою неї , можна передбрати елементи option і робити вже зними все що завгодно,
//в мому вмпадку я через selected буду міняти типу шрифта

GET_FORM.font.addEventListener('change', function () {

    for (let i = 0; i < GET_FORM.font.options.length; i++) {
        if (GET_FORM.font.options[i].selected) {
            GET_TOP.style.fontFamily = GET_FORM.font.options[i].value
        }
    }

})

// поява вікна з кольорами

GET_CLR_CHOOSE.addEventListener('click', function (e) {
    e.preventDefault()
    GET_BOX.classList.add('show_grid')
    GET_CHANGE_BGC.disabled = true
    GET_CHANGE_BGC.style.background = 'lightgrey'
    close_BTN.classList.add('show')
})
// РОБОТА з COLORS


GET_BOX.addEventListener('click', function (e) {

    // **********ПИТАННЯ***********
        // GET_TOP.style.color = getComputedStyle(e.target).color
        // GET_BOX.classList.remove('show_grid')
        // GET_CHANGE_BGC.disabled = false
        // GET_CHANGE_BGC.style.backgroundColor ='#f8d302'

    for (let i = 0; i < GET_TOP.children.length; i++) {
        GET_TOP.children[i].style.color = getComputedStyle(e.target).color
    }
    GET_BOX.classList.remove('show_grid')
    GET_CHANGE_BGC.disabled = false
    GET_CHANGE_BGC.style.backgroundColor = '#FF0078'
    close_BTN.classList.remove('show')

    

})
// РОБОТА З BACKGROUND 
//зроблю таку саму сітку як для вибору кольору тексту,  не можна використовувати вже готову , оскільки там буде лише властивість color
// Якщо  ж я використаю її , тоді мені будуть одразу  додаватись до параграфа та блоку всі власивості які я  передам, і вони будуть мати 
//однаковий колір , тому не буде видно парашграфа

GET_CHANGE_BGC.addEventListener('click', function (el) {

    el.preventDefault()
    GET_BOX_BGC.classList.add('show_grid')
    GET_CLR_CHOOSE.disabled = true
    GET_CLR_CHOOSE.style.background = 'lightgrey'
    close_BTN.classList.add('show')
})

GET_BOX_BGC.addEventListener('click', function (elements) {
    if (elements.target.classList.contains('bgc1')) {
        GET_TOP.style.backgroundColor = getComputedStyle(elements.target).backgroundColor
        GET_BOX_BGC.classList.remove('show_grid')
        GET_CLR_CHOOSE.disabled = false
        // GET_CLR_CHOOSE.style.backgroundColor = '#f8d302'
        GET_CLR_CHOOSE.style.backgroundColor = '#FF0078'
        close_BTN.classList.remove('show')
    }

})
// Зроблю кнопку для закриття, якщо користувач передумав вибирати колір



close_BTN.addEventListener('click',function(event){
    event.preventDefault()
    GET_BOX.classList.remove('show_grid')
    close_BTN.classList.remove('show')
    GET_BOX_BGC.classList.remove('show_grid')
    GET_CHANGE_BGC.disabled = false
    GET_CLR_CHOOSE.disabled = false
    GET_CHANGE_BGC.style.backgroundColor = '#FF0078'
    GET_CLR_CHOOSE.style.backgroundColor = '#FF0078'
})

// РОБОТА З ВИБОРОМ ТИПУ ТЕКСТУ (ЖИРНИЙ ЧИ КУРСИВ)
// Створю два різних класи для вибору типу тексту


custom.bold.addEventListener('click', function () {
    if (custom.bold.checked) {
        GET_TOP.style.fontWeight = 'bold'
    } else {
        GET_TOP.style.fontWeight = 'normal'
    }
})

custom.italic.addEventListener('click', function () {
    if (custom.italic.checked) {
        GET_TOP.style.fontStyle = 'italic'
    } else {
        GET_TOP.style.fontStyle = 'normal'
    }
})

// робота з кнопкою add
GET_ADD.addEventListener('click', function () {
    GET_ADD_ELEM.classList.add('show')
    GET_CONTENT.style.display = 'none'
})

// ПЕРЕБІР RADIO 


const CREATE_EL = document.querySelector('.add-elem')

CREATE_EL.addEventListener('click', function (e) {
    if (e.target.classList.contains('table')) {
        GET_TABLE.classList.add('show')
        GET_LIST.classList.remove('show')
    }
    if (e.target.classList.contains('list')) {
        GET_LIST.classList.add('show')
        GET_TABLE.classList.remove('show')
    }
})

// КНОПКА КРОК НАЗАД

const GET_PREV = document.querySelector('.prev-btn')

GET_PREV.addEventListener('click', function () {
    GET_CONTENT.style.display = 'block'
    GET_ADD_ELEM.classList.remove('show')
    getFORM.reset()
    FORM_ADD_LIST.reset()

})




// Кнопка яка пілся заповнення полів перекире нас назад
let getBTN = document.querySelector('.btn_create')
getBTN.addEventListener('click', function (e) {
    e.preventDefault()


    CREATE_EL.classList.remove('show')
    GET_CONTENT.style.display = 'block'

})



// логіка створення таблиці
GET_SAVE.addEventListener('click', function () {
    const get_count_tr = document.querySelector('.count_tr')
    const get_count_td = document.querySelector('.count_td')
    const get_width_of_td = document.querySelector('.width_of_td')
    const get_heigth_of_td = document.querySelector('.heigth_of_td')
    const get_Wid_Of_Border = document.querySelector('.width_of_border')

    let valueOfTR = get_count_tr.value;
    let valueOfTD = get_count_td.value;
    let valueOfWidth = get_width_of_td.value;
    let valueOfHeigth = get_heigth_of_td.value;
    let valueOfWidtOfBorder = get_Wid_Of_Border.value;


    // Заповнення для TABLE
    const CREATE_TABLE = document.createElement('table')

    GET_TOP.append(CREATE_TABLE)

    let getFORM = document.forms.add_table
    for (let i = 0; i < valueOfTR; i++) {
        const CREATE_TR = document.createElement('tr')
        CREATE_TABLE.append(CREATE_TR)
        for (let j = 0; j < valueOfTD; j++) {
            const CREATE_TD = document.createElement('td')
            CREATE_TR.append(CREATE_TD)

            CREATE_TD.innerText = 'TD'
            CREATE_TD.style.width = valueOfWidth + 'px'
            CREATE_TD.style.width = valueOfHeigth + 'px'
            CREATE_TD.style.borderWidth = valueOfWidtOfBorder + 'px'



            for (let k = 0; k < getFORM.border_type.options.length; k++) {
                if (getFORM.border_type.options[k].selected) {
                    CREATE_TD.style.borderStyle = getFORM.border_type.options[k].value
                }
            }


            for (let g = 0; g < getFORM.color_border.options.length; g++) {
                if (getFORM.color_border.options[g].selected) {
                    CREATE_TD.style.borderColor = getFORM.color_border.options[g].value
                    console.log(getFORM.color_border.options[g].value);
                }
            }



        }
    }

    getFORM.reset()

})

let getBTN_FOR_LI = document.querySelector('.btn_create_list')
getBTN_FOR_LI.addEventListener('click', function (e) {
    e.preventDefault()
    GET_ADD_ELEM.classList.remove('show')
    GET_CONTENT.style.display = 'block'


})

GET_SAVE.addEventListener('click', function () {
    const COUNT_LI = document.querySelector('.count_li')
    let valueOfLI = COUNT_LI.value
    const CREATE_LIST = document.createElement('ul')


    //Створю доступ до форми,щоб вподальшому доступитися до select
    

    GET_TOP.append(CREATE_LIST)
    for (let i = 1; i <= valueOfLI; i++) {
        let create_li_elem = document.createElement('li')
        CREATE_LIST.append(create_li_elem)
        create_li_elem.innerText = `item ${i}`
    }
    for (let j = 0; j < FORM_ADD_LIST.type_marks.options.length; j++) {
        if (FORM_ADD_LIST.type_marks.options[j].selected) {
            CREATE_LIST.style.listStyleType = FORM_ADD_LIST.type_marks.options[j].value
        }
    }

    
})