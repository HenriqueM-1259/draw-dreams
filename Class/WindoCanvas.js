class WindoCanvas{
    Globalvar = {
        Canvas: "",
        CanvasContext:"",
        
    
    }
    Main = {
        InitVar:() => {
        this.Globalvar.Canvas = document.getElementById("CanvasId")
        this.Globalvar.CanvasContext = this.Globalvar.Canvas.getContext('2d')       
        console.log(this.Globalvar.Canvas.height = window.innerHeight)
        console.log(this.Globalvar.Canvas.width =  window.innerWidth)
        },
    
    }
}
