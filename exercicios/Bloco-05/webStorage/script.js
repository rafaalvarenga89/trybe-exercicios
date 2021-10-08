window.onload = function() {
    let backgroundColorBodySelect = document.querySelector('#backgroundColorBodySelect');
    backgroundColorBodySelect.addEventListener('change', function() {
        let selected = backgroundColorBodySelect.selectedOptions[0];
        document.body.style.backgroundColor = selected.value;

        localStorage.setItem('backgroundColorBody', selected.value);
    });


    let colorBodySelect = document.querySelector('#colorBodySelect');
    colorBodySelect.addEventListener('change', function() {
        let selected = colorBodySelect.selectedOptions[0];
        document.body.style.color = selected.value;

        localStorage.setItem('colorBody', selected.value);
    });


    let inputFontFamily = document.querySelector('input[name = "font-family"]');
    let inputFontSize = document.querySelector('input[name = "font-size"]');
    inputFontSize.addEventListener('change', function(){
        let p = document.querySelector('p');
        p.style.fontFamily = `${inputFontFamily.value}`
        p.style.fontSize = `${inputFontSize.value}px`;

        localStorage.setItem('fontFamilyP', `${inputFontFamily.value}`)
        localStorage.setItem('fontSizeP', `${inputFontSize.value}px`);
    });

    let inputLineHeight = document.querySelector('input[name ="line-height"]');
    let converterStyle = document.querySelector('#converterStyle');
    inputLineHeight.addEventListener('change', function(){
        let p = document.querySelector('p');
        let selected = converterStyle.selectedOptions[0];
        p.style.lineHeight = `${inputLineHeight.value}${selected.value}`;

        localStorage.setItem('lineHeightP', `${inputLineHeight.value}`);
        localStorage.setItem('converterStyle', selected.value);



    })

    let backgroundColorBody = localStorage.getItem('backgroundColorBody');
    document.body.style.backgroundColor = backgroundColorBody;

    let colorBody = localStorage.getItem('colorBody');
    document.body.style.color = colorBody;


    let fontSizeP = localStorage.getItem('fontSizeP');
    let fontFamilyP = localStorage.getItem('fontFamilyP');
    let p = document.querySelector('p');
    p.style.fontFamily = fontFamilyP;
    p.style.fontSize = fontSizeP;

    let lineHeightP = localStorage.getItem('lineHeightP');
    let converter =  localStorage.getItem('converterStyle');
    
    p.style.lineHeight = `${lineHeightP}${converter}`;

    


    

}