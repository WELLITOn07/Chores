function constructorChore() {
    return {
        /*Global*/
        input: document.querySelector('.input-text'),
        tbody: document.querySelector('.tbody'),
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
                           this.checkBoxList[c].parentElement.parentElement.classList.add('taskCompleted')
                        }
                    }
                    /*call*/ 
                    this.applyingProgressDone()               
                }
                
                if (ev.classList.contains('button-tfoot-return')) {
                    for (let c in this.checkBoxList) {
                        if (this.checkBoxList[c].checked) {
                            this.checkBoxList[c].parentElement.parentElement.classList.remove('taskCompleted')
                            this.progress.setAttribute('value', this.arrayTR.length)
                         }
                    } 
                    /*call*/
                    this.applyingProgressDone()
                }
                if (ev.classList.contains('button-tfoot-remove')) {
                    for (let c in this.checkBoxList) {
                        if (this.checkBoxList[c].checked) {
                            let talkText = ""
                            this.talkText = this.checkBoxList[c].parentElement.parentElement.innerText

                            this.checkBoxList[c].parentElement.parentElement.remove()
                            /*call*/
                            this.attTalksArray()
                         }
                    } 
                    /*call*/
                    this.applyingProgressDone()
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
                    /*call*/
                    this.applyingProgressDone()
                }
                if (ev.classList.contains('icon-help')) {
                    window.alert('Lista de tarefas com progresso, para adicionar tarefas click em: <ADD>, para marcar como concluido use: <DONE>, para desfazer seleção use <↩>, para remover selecionados use: <DEL>, para selecionar tudo use: <ALL>')
                }
            });
        },

        applyingTalk() {
            let tbodyTR;
            this.tbodyTR = document.createElement('tr');
            this.tbodyTR.setAttribute('class', 'allTR')
            let tbodyTDtask;
            this.tbodyTDtask = document.createElement('td');
            this.tbodyTDtask.setAttribute('class', 'td-task');
            let tbodyTDInput;
            this.tbodyTDInput = document.createElement('td');
            this.tbodyTDInput.setAttribute('class', 'tbodyTdInput');
            let inputs;
            this.inputs = document.createElement('input');
            this.inputs.setAttribute('type', 'checkbox');
            this.inputs.setAttribute('class', 'td-checkbox');
            //for//
            for (let c in this.talksArray) {
                this.tbodyTDtask.innerHTML = this.talksArray[c];
                this.tbodyTDInput.appendChild(this.inputs);
                this.tbodyTR.appendChild(this.tbodyTDtask);
                this.tbodyTR.appendChild(this.tbodyTDInput);
                this.tbody.appendChild(this.tbodyTR);
            }
        },
        focus() {
            this.input.value = ''
            this.input.focus();          
        },
        applyingProgress() {
            let tbodyAllTR = []
            this.tbodyAllTR = document.getElementsByClassName('allTR')
            let progress
            this.progress = document.querySelector('.progress-img')
            this.progress.setAttribute('max', this.tbodyAllTR.length)
        },
        applyingProgressDone(){
            this.progress.setAttribute('value', this.arrayTR.length)
        },
        attTalksArray() {
            this.tbodyAllTR.length = 0
            this.applyingProgress()
        }
    }
    //----end return----//       
};

//-------------------------------//
const chore = constructorChore();
chore.playConstructor();

