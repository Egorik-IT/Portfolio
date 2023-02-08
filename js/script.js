/*animation project menu*/
const knopka__my__project = document.querySelector(".container__my__project");
const knopka__close__menu = document.querySelector(".close__menu__knopka");
const menu__project = document.querySelector(".menu__project");

knopka__my__project.addEventListener("click", function(event){
    project__menu();
});
function project__menu(){
    if(menu__project.classList != "menu__opasity__yes"){
        menu__project.classList.add("menu__opasity__yes");
    }
    document.body.style.overflow = "hidden";
    document.querySelector(".menu__project").style.overflow = "scroll";
    
};
knopka__close__menu.addEventListener("click", function(event){
    cloose__project__menu();
});
function cloose__project__menu(){
    if(menu__project.classList = "menu__opasity__yes"){
        menu__project.classList.remove("menu__opasity__yes")
        menu__project.classList.add("menu__project");
    }
    document.body.style.overflow = "scroll";
    document.querySelector(".menu__project").style.overflow = "hidden";
    
};

/*animation knopka__close__menu__day*/
knopka__close__menu.addEventListener("mouseover", function(event){
    shadow__close__day();
});
function shadow__close__day(){
    document.querySelector(".close__menu__knopka").style.animation = "forwards 0.6s close__background__day";
};

knopka__close__menu.addEventListener("mouseout", function(event){
    shadow__none__close__day();
});
function shadow__none__close__day(){
    document.querySelector(".close__menu__knopka").style.animation = "forwards 0.6s close__background__none__day";
};

/*night or day*/
const night = document.querySelector(".knopka__night");
const day = document.querySelector(".knopka__day");
const bodyTime = document.querySelector(".body__time");

night.addEventListener("click", function(event){
    start__night();
}
);
function start__night(){
    const project__text = document.querySelector(".text__project");
    if(document.querySelector(".container__knopka__night").style.display != "none"){
        document.querySelector(".container__knopka__night").style.display = "none"
        document.querySelector(".container__knopka__day").style.display = "flex"
    }
    if(bodyTime.classList != "start__night"){
        bodyTime.classList.add("start__night")
        bodyTime.classList.remove("start__day")
    }
    document.querySelector(".grid__container").style.background = "rgb(59, 59, 59)";
    document.querySelector(".close__menu__knopka").style.color = "rgb(231, 231, 231)";
    project__text.style.color = "rgb(231, 231, 231)";
    /*animation knopka__close__menu__night*/
    knopka__close__menu.addEventListener("mouseover", function(event){
        shadow__close__night();
    });
    function shadow__close__night(){
        document.querySelector(".close__menu__knopka").style.animation = "forwards 0.6s close__background__night";
    };
    
    knopka__close__menu.addEventListener("mouseout", function(event){
        shadow__none__close__night();
    });
    function shadow__none__close__night(){
        document.querySelector(".close__menu__knopka").style.animation = "forwards 0.6s close__background__none__night";
    };

};

day.addEventListener("click", function(event){
    start__day();
})
function start__day(){
    if(document.querySelector(".container__knopka__day").style.display != "none"){
        document.querySelector(".container__knopka__day").style.display = "none"
        document.querySelector(".container__knopka__night").style.display = "flex"
    }
    if(bodyTime.classList != "start__day"){
        bodyTime.classList.add("start__day")
        bodyTime.classList.remove("start__night")
    }
    document.querySelector(".grid__container").style.background = "rgb(231, 231, 231)";
    document.querySelector(".close__menu__knopka").style.color = "rgb(59, 59, 59)";
    document.querySelectorAll(".text__project").style.color = "rgb(59, 59, 59)";
    /*animation knopka__close__menu__day*/
    knopka__close__menu.addEventListener("mouseover", function(event){
        shadow__close__day();
    });
    function shadow__close__day(){
        document.querySelector(".close__menu__knopka").style.animation = "forwards 0.6s close__background__day";
    };
    
    knopka__close__menu.addEventListener("mouseout", function(event){
        shadow__none__close__day();
    });
    function shadow__none__close__day(){
        document.querySelector(".close__menu__knopka").style.animation = "forwards 0.6s close__background__none__day";
    };
};

const passwordInput = document.querySelector(".password__input");

passwordInput.addEventListener("mousedown", function(event){
    Access_Is_Open_Or_Access_Is_Closed();
});

function Access_Is_Open_Or_Access_Is_Closed(){
    let passwordTrue = document.querySelector(".password__fild").value;
    if(passwordTrue == "Hello world!"){
        console.log("Доступ  разрешён!");
        document.querySelector(".anim__hello").style. animation = "opasitykis__block forwards 1s";
        document.querySelector(".hello").style.animation = "opasitykis__text__end  forwards 0.7s";
        document.querySelector(".container__password").style.animation = "opasitykis__container__password__end forwards 0.7s";
        document.querySelector(".error__password").style.display = "none";
        document.querySelector(".not__error__password").style.display = "block";
        setTimeout(function noter__error__password() {
            document.querySelector(".not__error__password").style.display = "none";
        }, 900);
        document.querySelector(".container__password").style.margin = "158px 0px 0px 0px";
    }
    else{
        console.log("Доступ запрещён!");
        document.querySelector(".error__password").style.animation = "opasitykis__error__password 0.5s forwards";
        document.querySelector(".error__password").style.display = "block";
        document.querySelector(".container__password").style.margin = "158px 0px 0px 0px";
        document.querySelector(".password__fild").value = "";
    };
    if(document.querySelector(".error__password").style.animation = "opasitykis__error__password 0.5s forwards"){
    setTimeout(function yeser__error__password() {
        document.querySelector(".error__password").style.animation = "none";
    }, 500);
    }
    if(passwordTrue == "Hello world!"){
    setTimeout(function anim__hello__none(){
        document.querySelector(".anim__hello").style.animation = "none";
        document.querySelector(".hello").style.animation = "none";
        document.querySelector(".container__password").style.animation = "none";
        document.querySelector(".anim__hello").style.display = "none";
        document.querySelector(".hello").style.display = "none";
        document.querySelector(".container__password").style.display = "none";
    },2000);
}
};

function trebuhov(){
    let inputPassword = document.querySelector('.password__fild');
    if(inputPassword.getAttribute('type') == 'password'){
       inputPassword.setAttribute('type', 'text')
    }else{
        inputPassword.setAttribute('type', 'password')
    }
};
