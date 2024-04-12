const headerImg = document.querySelector('.menu header img');
const headerText = document.querySelector('.menu header h3');
const menuListItem = document.querySelectorAll('.menu__list__item a');
const titleBio = document.querySelector('.title__bio');
const titleSubsection = document.querySelector('.title__subsection');
const titleNetwork = document.querySelectorAll('.title__network a');
const networkImg = document.querySelectorAll('.title__network img')
const myProfile = document.querySelector('.title__profile');
const aboutTitle = document.querySelector('.about__container h3'); 
const aboutParag = document.querySelectorAll('.about__container p');
const skillsTitle = document.querySelector('.skills__title');
const skillsBox = document.querySelectorAll('.skills__box');
const hobbiesTitle = document.querySelector('.hobbies__title');
const hobbiesBox = document.querySelectorAll('.hobbies__box');
const formacaoTitle = document.querySelector('#formacaoTitle');
const certificacaoTitle = document.querySelector('#certificacaoTitle');
const cursosTitle = document.querySelector('#cursosTitle');
const academicCards = document.querySelectorAll('.academic__courses__item__img');
const academicItemTitle = document.querySelectorAll('.academic__courses__item__title h4');
const academicItemSubtitle = document.querySelectorAll('.academic__courses__item__subtitle p');
const buttonCertificado = document.querySelectorAll('#buttonCertificado');
const buttonRepo = document.querySelectorAll('.experiencia__botao--repo');
const buttonDeploy = document.querySelectorAll('.experiencia__botao--demo');
const buttonForm = document.querySelector('.formcontato__botao');
const experienceTitle = document.querySelector('.experience h2');
const experienceInfoTitle = document.querySelectorAll('.experience__info h2');
const experienceInfoSubtitle = document.querySelectorAll('.experience__info h3');
const experienceImg = document.querySelectorAll('.experience__img');
const contatoTitle = document.querySelector('.formcontato__text h2');
const contatoSubtitle = document.querySelectorAll('.formcontato__text h3');
const footerParag = document.querySelectorAll('.footer__rodape p');

console.log(headerImg, headerText, menuListItem, titleBio, titleSubsection, titleNetwork, networkImg, myProfile, aboutTitle, aboutParag, skillsTitle, skillsBox, hobbiesTitle, hobbiesBox, formacaoTitle, certificacaoTitle, cursosTitle, academicCards, academicItemTitle, academicItemSubtitle, buttonCertificado, buttonRepo, buttonDeploy, buttonForm, experienceTitle, experienceInfoTitle, experienceInfoSubtitle, experienceImg, contatoTitle, contatoSubtitle, footerParag);

//nav menu
headerImg.addEventListener('mouseover', ()=> {
    headerImg.style.setProperty('-webkit-filter', 'drop-shadow(3px 3px 0.5px var(--cor-da-section))');
});
headerImg.addEventListener('mouseout', ()=> {
    headerImg.style.setProperty('-webkit-filter', '');
});

headerText.addEventListener('mouseover', ()=> {
    headerText.style.setProperty('color', 'var(--cor-da-section)');
    headerText.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)');
});
headerText.addEventListener('mouseout', ()=> {
    headerText.style.setProperty('color', '');
    headerText.style.setProperty('text-shadow', '');
});

//nav li
menuListItem[0].addEventListener('mouseover', ()=> {
    menuListItem[0].classList.add('addColor');
    menuListItem[0].classList.remove('removeColor');
    menuListItem[0].style.transformScale = '3';
    menuListItem[0].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)');
});
menuListItem[0].addEventListener('mouseout', ()=> {
    menuListItem[0].classList.add('removeColor');
    menuListItem[0].classList.remove('addColor');
    menuListItem[0].style.setProperty('text-shadow', '');
});

menuListItem[1].addEventListener('mouseover', ()=> {
    menuListItem[1].classList.add('addColor');
    menuListItem[1].classList.remove('removeColor');
    menuListItem[1].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)');
});
menuListItem[1].addEventListener('mouseout', ()=> {
    menuListItem[1].classList.add('removeColor');
    menuListItem[1].classList.remove('addColor');
    menuListItem[1].style.setProperty('text-shadow', '');
});

menuListItem[2].addEventListener('mouseover', ()=> {
    menuListItem[2].classList.add('addColor');
    menuListItem[2].classList.remove('removeColor');
    menuListItem[2].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)');
});
menuListItem[2].addEventListener('mouseout', ()=> {
    menuListItem[2].classList.add('removeColor');
    menuListItem[2].classList.remove('addColor');
    menuListItem[2].style.setProperty('text-shadow', '');
});

menuListItem[3].addEventListener('mouseover', ()=> {
    menuListItem[3].classList.add('addColor');
    menuListItem[3].classList.remove('removeColor');
    menuListItem[3].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)');
});
menuListItem[3].addEventListener('mouseout', ()=> {
    menuListItem[3].classList.add('removeColor');
    menuListItem[3].classList.remove('addColor');
    menuListItem[3].style.setProperty('text-shadow', '');
});

menuListItem[4].addEventListener('mouseover', ()=> {
    menuListItem[4].classList.add('addColor');
    menuListItem[4].classList.remove('removeColor');
    menuListItem[4].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)');
});
menuListItem[4].addEventListener('mouseout', ()=> {
    menuListItem[4].classList.add('removeColor');
    menuListItem[4].classList.remove('addColor');
    menuListItem[4].style.setProperty('text-shadow', '');
});

menuListItem[5].addEventListener('mouseover', ()=> {
    menuListItem[5].classList.add('addColor');
    menuListItem[5].classList.remove('removeColor');
    menuListItem[5].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)');
});
menuListItem[5].addEventListener('mouseout', ()=> {
    menuListItem[5].classList.add('removeColor');
    menuListItem[5].classList.remove('addColor');
    menuListItem[5].style.setProperty('text-shadow', '');
});

//about
titleBio.addEventListener('mouseover', ()=> {
    titleBio.style.setProperty('color', 'var(--cor-da-section)');
    titleBio.style.setProperty('text-shadow', '3px 3px 0.5px var(--cor-cards)');    
});
titleBio.addEventListener('mouseout', ()=> {
    titleBio.style.setProperty('color', '');
    titleBio.style.setProperty('text-shadow', '');
});

titleSubsection.addEventListener('mouseover', ()=> {
    titleSubsection.style.setProperty('color', 'var(--cor-da-section)');
    titleSubsection.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)'); 
});
titleSubsection.addEventListener('mouseout', ()=> {
    titleSubsection.style.setProperty('color', '');
    titleSubsection.style.setProperty('text-shadow', '');
});

titleNetwork[0].addEventListener('mouseover', ()=> {
    titleNetwork[0].style.setProperty('color', 'var(--cor-da-section)');
    titleNetwork[0].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)'); 
});
titleNetwork[0].addEventListener('mouseout', ()=> {
    titleNetwork[0].style.setProperty('color', '');
    titleNetwork[0].style.setProperty('text-shadow', '');
});

networkImg[0].addEventListener('mouseover', ()=> {
    networkImg[0].style.setProperty('-webkit-filter', 'drop-shadow(3px 3px 0.5px var(--cor-da-section))');
});
networkImg[0].addEventListener('mouseout', ()=> {
    networkImg[0].style.setProperty('-webkit-filter', '');
});

titleNetwork[1].addEventListener('mouseover', ()=> {
    titleNetwork[1].style.setProperty('color', '#BCA37F');
    titleNetwork[1].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)'); 
});
titleNetwork[1].addEventListener('mouseout', ()=> {
    titleNetwork[1].style.setProperty('color', '');
    titleNetwork[1].style.setProperty('text-shadow', '');
});

networkImg[1].addEventListener('mouseover', ()=> {
    networkImg[1].style.setProperty('-webkit-filter', 'drop-shadow(3px 3px 0.5px var(--cor-da-section))');
});
networkImg[1].addEventListener('mouseout', ()=> {
    networkImg[1].style.setProperty('-webkit-filter', '');
});

//img Profile
myProfile.addEventListener('mouseover', ()=> {
    myProfile.style.setProperty('filter', 'drop-shadow(8px 8px 0.5px var(--cor-primaria)');

});
myProfile.addEventListener('mouseout', ()=> {
    myProfile.style.setProperty('filter', '');
});

//about
aboutTitle.addEventListener('mouseover', ()=> {
    aboutTitle.style.setProperty('color', 'var(--cor-cards)');
    aboutTitle.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
aboutTitle.addEventListener('mouseout', ()=> {
    aboutTitle.style.setProperty('color', '');
    aboutTitle.style.setProperty('text-shadow', '');
});

aboutParag[0].addEventListener('mouseover', ()=> {
    aboutParag[0].style.setProperty('color', 'var(--cor-cards)');
    aboutParag[0].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
aboutParag[0].addEventListener('mouseout', ()=> {
    aboutParag[0].style.setProperty('color', '');
    aboutParag[0].style.setProperty('text-shadow', '');
});

aboutParag[1].addEventListener('mouseover', ()=> {
    aboutParag[1].style.setProperty('color', 'var(--cor-cards)');
    aboutParag[1].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
aboutParag[1].addEventListener('mouseout', ()=> {
    aboutParag[1].style.setProperty('color', '');
    aboutParag[1].style.setProperty('text-shadow', '');
});

//skills
skillsTitle.addEventListener('mouseover', ()=> {
    skillsTitle.style.setProperty('color', 'var(--cor-da-section)');
    skillsTitle.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)'); 
});
skillsTitle.addEventListener('mouseout', ()=> {
    skillsTitle.style.setProperty('color', '');
    skillsTitle.style.setProperty('text-shadow', ''); 
});

for (let i=0; i<skillsBox.length; i++) {
    skillsBox[i].addEventListener('mouseover', ()=> {
        skillsBox[i].style.setProperty('transform', 'scale(1.05)');
        skillsBox[i].style.setProperty('filter', 'drop-shadow(8px 8px 0.5px var(--cor-primaria)');
    });
    skillsBox[i].addEventListener('mouseout', ()=> {
        skillsBox[i].style.setProperty('transform', '');
        skillsBox[i].style.setProperty('filter', '');
    });
};

//hobbies
hobbiesTitle.addEventListener('mouseover', ()=> {
    hobbiesTitle.style.setProperty('color', 'var(--cor-da-section)');
    hobbiesTitle.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)'); 
});
hobbiesTitle.addEventListener('mouseout', ()=> {
    hobbiesTitle.style.setProperty('color', '');
    hobbiesTitle.style.setProperty('text-shadow', ''); 
});

for (let i=0; i<hobbiesBox.length; i++) {
    hobbiesBox[i].addEventListener('mouseover', ()=> {
        hobbiesBox[i].style.setProperty('transform', 'scale(1.05)');
        hobbiesBox[i].style.setProperty('filter', 'drop-shadow(8px 8px 0.5px var(--cor-primaria)');
    });
    hobbiesBox[i].addEventListener('mouseout', ()=> {
        hobbiesBox[i].style.setProperty('transform', '');
        hobbiesBox[i].style.setProperty('filter', '');
    });
};

//academic
//formação
formacaoTitle.addEventListener('mouseover', ()=> {
    formacaoTitle.style.setProperty('color', 'var(--cor-cards)');
    formacaoTitle.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
formacaoTitle.addEventListener('mouseout', ()=> {
    formacaoTitle.style.setProperty('color', '');
    formacaoTitle.style.setProperty('text-shadow', ''); 
});

for (let i=0; i<academicCards.length; i++) {
    academicCards[i].addEventListener('mouseover', ()=> {
        academicCards[i].style.setProperty('transform', 'scale(1.05)');
        academicCards[i].style.setProperty('filter', 'drop-shadow(8px 8px 0.5px var(--cor-primaria)');
    });
    academicCards[i].addEventListener('mouseout', ()=> {
        academicCards[i].style.setProperty('transform', '');
        academicCards[i].style.setProperty('filter', '');
    });
};

for (let i=0; i<academicItemTitle.length; i++) {
    academicItemTitle[i].addEventListener('mouseover', ()=> {
        academicItemTitle[i].style.setProperty('color', 'var(--cor-cards)');
        academicItemTitle[i].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
    });
    academicItemTitle[i].addEventListener('mouseout', ()=> {
        academicItemTitle[i].style.setProperty('color', '');
        academicItemTitle[i].style.setProperty('text-shadow', ''); 
    });
};

for (let i=0; i<academicItemSubtitle.length; i++) {
    academicItemSubtitle[i].addEventListener('mouseover', ()=> {
        academicItemSubtitle[i].style.setProperty('color', 'var(--cor-cards)');
        academicItemSubtitle[i].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
    });
    academicItemSubtitle[i].addEventListener('mouseout', ()=> {
        academicItemSubtitle[i].style.setProperty('color', '');
        academicItemSubtitle[i].style.setProperty('text-shadow', ''); 
    });
};

//certificados
certificacaoTitle.addEventListener('mouseover', ()=> {
    certificacaoTitle.style.setProperty('color', 'var(--cor-cards)');
    certificacaoTitle.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
certificacaoTitle.addEventListener('mouseout', ()=> {
    certificacaoTitle.style.setProperty('color', '');
    certificacaoTitle.style.setProperty('text-shadow', ''); 
});

//cursos
cursosTitle.addEventListener('mouseover', ()=> {
    cursosTitle.style.setProperty('color', 'var(--cor-cards)');
    cursosTitle.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
cursosTitle.addEventListener('mouseout', ()=> {
    cursosTitle.style.setProperty('color', '');
    cursosTitle.style.setProperty('text-shadow', ''); 
});

//botões
//certificado
for (let i=0; i<buttonCertificado.length; i++) {
    buttonCertificado[i].addEventListener('mouseover', ()=> {
        buttonCertificado[i].classList.add('button1');
        buttonCertificado[i].classList.remove('button2'); 
    });
    buttonCertificado[i].addEventListener('mouseout', ()=> {
        buttonCertificado[i].classList.add('button2');
        buttonCertificado[i].classList.remove('button1'); 
    });
};

//repositório e deploy
for (let i=0; i<buttonRepo.length; i++) {
    buttonRepo[i].addEventListener('mouseover', ()=> {
        buttonRepo[i].classList.add('button2');
        buttonRepo[i].classList.remove('button1'); 
    });
    buttonRepo[i].addEventListener('mouseout', ()=> {
        buttonRepo[i].classList.add('button1');
        buttonRepo[i].classList.remove('button2'); 
    });
};

for (let i=0; i<buttonDeploy.length; i++) {
    buttonDeploy[i].addEventListener('mouseover', ()=> {
        buttonDeploy[i].classList.add('button1');
        buttonDeploy[i].classList.remove('button2'); 
    });
    buttonDeploy[i].addEventListener('mouseout', ()=> {
        buttonDeploy[i].classList.add('button2');
        buttonDeploy[i].classList.remove('button1'); 
    });
};

//contato
buttonForm.addEventListener('mouseover', ()=> {
    buttonForm.classList.add('button1');
    buttonForm.classList.remove('button2'); 
});
buttonForm.addEventListener('mouseout', ()=> {
    buttonForm.classList.add('button2');
    buttonForm.classList.remove('button1'); 
});

//experience
experienceTitle.addEventListener('mouseover', ()=> {
    experienceTitle.style.setProperty('color', 'var(--cor-cards)');
    experienceTitle.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
experienceTitle.addEventListener('mouseout', ()=> {
    experienceTitle.style.setProperty('color', '');
    experienceTitle.style.setProperty('text-shadow', ''); 
});

//experience img
for (let i=0; i<experienceImg.length; i++) {
    experienceImg[i].addEventListener('mouseover', ()=> {
        experienceImg[i].style.setProperty('-webkit-filter', 'drop-shadow(8px 8px 0.5px var(--cor-primaria))');
    });
    experienceImg[i].addEventListener('mouseout', ()=> {
        experienceImg[i].style.setProperty('-webkit-filter', '');
    });
}

//experiencia info title e subtitle
for (let i=0; i<experienceInfoTitle.length; i++) {
    experienceInfoTitle[i].addEventListener('mouseover', ()=> {
        experienceInfoTitle[i].style.setProperty('color', 'var(--cor-cards)');
        experienceInfoTitle[i].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
    });
    experienceInfoTitle[i].addEventListener('mouseout', ()=> {
        experienceInfoTitle[i].style.setProperty('color', '');
        experienceInfoTitle[i].style.setProperty('text-shadow', ''); 
    });
}

for (let i=0; i<experienceInfoSubtitle.length; i++) {
    experienceInfoSubtitle[i].addEventListener('mouseover', ()=> {
        experienceInfoSubtitle[i].style.setProperty('color', 'var(--cor-cards)');
        experienceInfoSubtitle[i].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
    });
    experienceInfoSubtitle[i].addEventListener('mouseout', ()=> {
        experienceInfoSubtitle[i].style.setProperty('color', '');
        experienceInfoSubtitle[i].style.setProperty('text-shadow', ''); 
    });
}

//contato
contatoTitle.addEventListener('mouseover', ()=> {
    contatoTitle.style.setProperty('color', 'var(--cor-cards)');
    contatoTitle.style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
contatoTitle.addEventListener('mouseout', ()=> {
    contatoTitle.style.setProperty('color', '');
    contatoTitle.style.setProperty('text-shadow', ''); 
});

contatoSubtitle[0].addEventListener('mouseover', ()=> {
    contatoSubtitle[0].style.setProperty('color', 'var(--cor-cards)');
    contatoSubtitle[0].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
contatoSubtitle[0].addEventListener('mouseout', ()=> {
    contatoSubtitle[0].style.setProperty('color', '');
    contatoSubtitle[0].style.setProperty('text-shadow', ''); 
});

contatoSubtitle[1].addEventListener('mouseover', ()=> {
    contatoSubtitle[1].style.setProperty('color', 'var(--cor-cards)');
    contatoSubtitle[1].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-primaria)'); 
});
contatoSubtitle[1].addEventListener('mouseout', ()=> {
    contatoSubtitle[1].style.setProperty('color', '');
    contatoSubtitle[1].style.setProperty('text-shadow', ''); 
});

//footer
footerParag[0].addEventListener('mouseover', ()=> {
    footerParag[0].style.setProperty('color', 'var(--cor-da-section)');
    footerParag[0].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)'); 
});
footerParag[0].addEventListener('mouseout', ()=> {
    footerParag[0].style.setProperty('color', '');
    footerParag[0].style.setProperty('text-shadow', ''); 
});

footerParag[1].addEventListener('mouseover', ()=> {
    footerParag[1].style.setProperty('color', 'var(--cor-da-section)');
    footerParag[1].style.setProperty('text-shadow', '2px 2px 0.5px var(--cor-cards)'); 
});
footerParag[1].addEventListener('mouseout', ()=> {
    footerParag[1].style.setProperty('color', '');
    footerParag[1].style.setProperty('text-shadow', ''); 
});

