//Button to change color
let colorBackground = '#E9E9E9';
document.querySelector('body').style.backgroundColor = colorBackground;

const links = document.querySelectorAll('a');
const imagesIcons = document.querySelectorAll('.liIcons');
const btnProjetos = document.querySelector('.btnProjetos');
const titleDescription = document.querySelector('.titleDescription');
const description = document.querySelector('.description');
const imageArrow = document.querySelector('.imageArrow');
const skillBg = document.querySelector('.skill');
const aboutMe = document.querySelector('.aboutMe_Container');
const paragraphAbout = document.querySelector('.paragraph_aboutMe');
const idiomas = document.querySelector('.idiomas');
const btnLinkedin = document.querySelector('.btn_linkedin');
const iconArrowUp = document.querySelector('.arrow_up');
const containerProjetos = document.querySelector('.containerProjetos');
const btnProjetosContainer = document.querySelectorAll('.btnProjetosContainer');
const iconArrowUpContainer = document.querySelectorAll('.iconArrowUp');
const titleH1 = document.querySelector('.formacaoExperiencias');
const contato = document.querySelector('.contato');
const btnEnviar = document.querySelector('.btnEnviar');
const paragraph = document.querySelector('.paragraph');
const header = document.querySelector('.header');
const footerMobile = document.querySelector('.footerMobileList');
const iconFooter = document.querySelectorAll('.iconFooter');
const cursosEHabilidades = document.querySelector('.cursosEHabilidades');
const container_Bts_Link = document.querySelector('.container_Bts_Link');
const btnProjeto1 = document.querySelector('.btnProjeto1')


document.getElementById('colorDark').addEventListener('click', function () {
    if (colorBackground === '#E9E9E9') {
        colorBackground = '#111217';

        //Footer mobile
        footerMobile.style.backgroundColor = '#111217';

        iconFooter.forEach((icon) => {
            icon.style.filter = 'brightness(0) invert(1)';
        });

        //header
        header.style.backgroundColor = '#111217';

        //Footer
        paragraph.style.color = '#fff';

        //Container contato
        contato.style.color = '#fff';
        btnEnviar.style.backgroundColor = '#111217';
        btnEnviar.style.color = '#fff';
        btnEnviar.style.borderColor = '#fff';
        btnEnviar.style.transition = 'transform 0.3s ease-in-out';
        btnLinkedin.style.transition = 'transform 0.3s ease-in-out';
        container_Bts_Link.style.transition = 'transform 0.3s ease-in-out';

        //Container skills
        titleH1.style.color = '#fff';
        cursosEHabilidades.style.color = '#fff'

        //Container projetos
        containerProjetos.style.color = '#fff'
        btnProjetosContainer.forEach((bts) => {
            bts.style.backgroundColor = '#111217';
            bts.style.borderColor = '#fff';
            bts.style.color = '#fff';
        })

        iconArrowUpContainer.forEach((icon) => {
            icon.style.filter = 'brightness(0) invert(1)';
        });

        //Container sobre mim
        aboutMe.style.color = '#fff';
        paragraphAbout.style.color = '#fff';
        idiomas.style.color = '#fff';
        btnLinkedin.style.backgroundColor = '#111217';
        btnLinkedin.style.color = '#fff';
        btnLinkedin.style.borderColor = '#fff';
        btnLinkedin.style.transition = 'transform 0.3s ease-in-out';
        iconArrowUp.style.filter = 'brightness(0) invert(1)';

        //Alterar BG das tecologias
        skillBg.style.backgroundColor = '#28292E';
        skillBg.style.color = '#fff';

        //Alterar cor dos links
        links.forEach(function (link) {
            link.style.color = '#fff';
        });

        //Altera a cor do title da descição  
        titleDescription.style.color = '#fff';

        //Altera a cor da descriçãp
        description.style.color = '#fff'

        //Altera as cores dos Icones #E9E9E9es sociais
        imagesIcons.forEach(function (image) {
            image.style.filter = 'brightness(0) invert(1)';
        })

        //Alterar cores do botão projetos
        btnProjetos.style.backgroundColor = '#111217';
        btnProjetos.style.color = '#fff';
        btnProjetos.style.borderColor = '#fff';
        btnProjetos.style.transition = 'background 0s linear';
        btnProjetos.style.transition = 'transform 0.3s ease-in-out';
        imageArrow.style.fill = '#fff';

    } else {
        colorBackground = '#E9E9E9';

        //Footer mobile
        footerMobile.style.backgroundColor = '#e9e9e9';

        iconFooter.forEach((icon) => {
            icon.style.filter = 'brightness(1) invert(0)';
        });

        //header
        header.style.backgroundColor = '#E9E9E9';

        //Footer
        paragraph.style.color = '#000';

        //Container contato
        contato.style.color = '#000';
        btnEnviar.style.backgroundColor = '#E9E9E9';
        btnEnviar.style.color = '#000';
        btnEnviar.style.borderColor = '#000';
        btnLinkedin.style.transition = 'transform 0.3s ease-in-out';
        container_Bts_Link.style.transition = 'transform 0.3s ease-in-out';

        //Container skills
        titleH1.style.color = '#000';
        cursosEHabilidades.style.color = '#000';

        //Container projetos
        containerProjetos.style.color = '#000'
        btnProjetosContainer.forEach((bts) => {
            bts.style.backgroundColor = '#e9e9e9';
            bts.style.borderColor = '#000';
            bts.style.color = '#000';
        })

        iconArrowUpContainer.forEach((icon) => {
            icon.style.filter = 'brightness(1) invert(0)';
        });

        //Container sobre mim
        aboutMe.style.color = '#000';
        paragraphAbout.style.color = '#000';
        idiomas.style.color = '#000';
        btnLinkedin.style.backgroundColor = '#E9E9E9';
        btnLinkedin.style.color = '#000';
        btnLinkedin.style.borderColor = '#000';
        iconArrowUp.style.filter = 'brightness(1) invert(0)';

        //Alterar BG das tecologias
        skillBg.style.backgroundColor = '#c7c8c9';
        skillBg.style.color = '#000';

        //Altera a cor dos links
        links.forEach(function (link) {
            link.style.color = '#161616';
        });

        //Alterar cores do botão projetos
        btnProjetos.style.backgroundColor = '#E9E9E9';
        btnProjetos.style.color = '#161616';
        btnProjetos.style.borderColor = '#161616';
        btnProjetos.style.transition = 'background 0s linear';
        btnProjetos.style.transition = 'transform 0.3s ease-in-out';
        imageArrow.style.fill = '#161616';

        //Altera a cor do title da descição          
        titleDescription.style.color = '#161616';

        //Altera a cor da descriçãp
        description.style.color = '#161616'

        //Altera as cores dos Icones #E9E9E9es sociais
        imagesIcons.forEach(function (image) {
            image.style.filter = 'brightness(1) invert(0)';
        })
    }

    document.querySelector('body').style.backgroundColor = colorBackground;


    //Alterar icones sol e lua
    let image = document.getElementById('colorDark');

    //Split remove '/' da URL e transforma em um array.
    //POP mostra o ultimo elemento da URL, no caso lua.png
    let currentSrc = image.src.split('/').pop();

    if (currentSrc === 'lua.png') {
        image.src = 'images/sol.png';
    } else {
        image.src = 'images/lua.png';
    }
});

//Alterar setas FAQ
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        const seta = item.querySelector('.imgSeta');

        faqItem.classList.toggle('open');

        if (faqItem.classList.contains('open')) {
            seta.src = 'images/seta-para-cima.png';
        } else {
            seta.src = 'images/seta-para-baixo.png';
        }
    });
});






//Talvez eu possa colocar a mesma clase em todos elementos para diminuir meu JS ja que as cores sempre sao a mesma

//Alterar cor dos icones no dark