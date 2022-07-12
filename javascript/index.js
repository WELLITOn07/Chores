function constructorChore() {
    return {
        /*Global*/
        input: document.querySelector('.input-text'),
        tbody: document.querySelector('.tbody'),

        tbodyAllTR: document.getElementsByClassName('allTR'),
        talksArray: [],
        arrayTR: [] = document.getElementsByClassName('taskCompleted'),
        checkBoxList : document.getElementsByClassName('td-checkbox'),

        /*------Constructor Chore------*/
        playConstructor() {
             /*call*/   
            this.eventListener(); 
        },    
        eventListener() {
            document.addEventListener('click', e => {
                const ev = e.target
                if (ev.classList.contains('button-add') && this.input.value != '') {
                    this.talksArray.push(this.input.value);
                    /*call*/               
                    this.applyingTalk();
                    this.applyingProgress();
                    this.focus(); 
                }
                if (ev.classList.contains('button-tfoot-done')) {
                    for (let c in this.checkBoxList) {
                        if (this.checkBoxList[c].checked) {
                           this.checkBoxList[c].parentElement.classList.add('taskCompleted')
                        }
                    }
                    /*call*/ 
                    this.applyingProgressDone()               
                }
                if (ev.classList.contains('button-tfoot-return')) {
                    for (let c in this.checkBoxList) {
                        if (this.checkBoxList[c].checked) {
                            this.checkBoxList[c].parentElement.classList.remove('taskCompleted')
                            this.progress.setAttribute('value', this.arrayTR.length)
                         }
                    } 
                }
                if (ev.classList.contains('button-tfoot-remove')) {
                    for (let c in this.checkBoxList) {
                        if (this.checkBoxList[c].checked) {
                            this.checkBoxList[c].parentElement.style.display = 'none'
                         }
                    } 
                }
                if (ev.classList.contains('button-tfoot-all')) {
                    for (let c in this.checkBoxList) {
                        if (this.checkBoxList[c].classList.contains('td-checkbox')) {
                            this.checkBoxList[c].classList.toggle('checked-all');
                        }
                        if (this.checkBoxList[c].classList.contains('checked-all')) {
                            this.checkBoxList[c].checked = true;
                        } else {
                            this.checkBoxList[c].checked = false;
                        }
                    }
                }
                if (ev.classList.contains('icon-help')) {
                    window.alert('Lista de tarefas com progresso, para adicionar tarefas click em: <ADD>, para marcar como concluido use: <DONE>, para desfazer seleção use <↩>, para remover selecionados use: <DEL>, para selecioar tudo use: <ALL>')
                }
            });
        },

        applyingTalk() {
            let tbodyTR;
            this.tbodyTR = document.createElement('tr');
            this.tbodyTR.setAttribute('class', 'allTR')
            let tbodyTD;
            this.tbodyTD = document.createElement('td');
            this.tbodyTD.setAttribute('class', 'td-task');
            let tbodyTdInput;
            this.tbodyTdInput = document.createElement('input');
            this.tbodyTdInput.setAttribute('type', 'checkbox');
            this.tbodyTdInput.setAttribute('class', 'td-checkbox');
            //for//
            for (let c in this.talksArray) {
                this.tbodyTD.innerHTML = this.talksArray[c];
                this.tbodyTR.appendChild(this.tbodyTD);
                this.tbodyTR.appendChild(this.tbodyTdInput);
                this.tbody.appendChild(this.tbodyTR);
            }
        },
        focus() {
            this.input.value = ''
            this.input.focus();          
        },
        applyingProgress() {
            let progress
            this.progress = document.querySelector('.progress-img')
            this.progress.setAttribute('max', this.talksArray.length)
        },
        applyingProgressDone(){
            this.progress.setAttribute('value', this.arrayTR.length)
        },
    }
    //----end return----//       
};

//-------------------------------//
const chore = constructorChore();
chore.playConstructor();
