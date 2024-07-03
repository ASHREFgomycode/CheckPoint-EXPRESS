const express = require("express")

const app = express()

const port = 5000

const verifDate = (req,res,next)=> {
    var currentDate =   new Date()
    var CurrentHour = currentDate.getHours()
    var CurrentDay =  currentDate.getDay()
    if (CurrentDay == 6 || CurrentDay == 0 || CurrentHour > 17 || CurrentHour < 9 ) {
        return res.send("we are Clawzed sorry")
    } 
    next()
}
 
app.use(verifDate)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/public/HomePage.html")
})


app.get('/Contacts', (req,res)=>{
    res.sendFile(__dirname+"/public/ContactUs.html")
})

app.get("/Services" , (req,res)=>{
    res.sendFile(__dirname+"/public/OurService.html")
})





 app.listen(port, console.log("Server is running"))



