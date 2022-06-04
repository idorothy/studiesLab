class CalcController {

    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }
      
    initialize(){
        this._displayCalcEl.innerHTML = "457";
        this._dateEl.innerHTML = "01/06/2906";
        this._timeEl.innerHTML = "15:33";
    }

    get dispalyCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set dispalyCalc(valor){
        this._displayCalcEl.innterHTML = valor;
    }

    get currentDate(){
        return new Date()
    } 

    set currentDate(valor){
        this._currentDate =  valor;
    }
} 