const inpData = document.querySelector("input")
const generateBtn = document.querySelector(".linkData .send")
const imgGenerate = document.querySelector("img")
generateBtn.addEventListener("click", ()=>{
    let getValue = inpData.value
    console.log(getValue);
    imgGenerate.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${getValue}`
    generateBtn.innerText= "generating...."
    imgGenerate.addEventListener("load", ()=>{
        generateBtn.innerText=" send"
    })

    
})