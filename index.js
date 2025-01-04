let string='';
let lastAns ='';
console.log(lastAns)

let numbers = document.querySelectorAll('.buttons');
let display= document.querySelector('.input');
//console.log(string)

numbers.forEach((eachNumber)=>{
    eachNumber.addEventListener('click',(e)=>{

       // console.log(e.target.id)
        if(e.target.id==='AC'){
            string='';
            display.value=string;
           }
           else{
                if(e.target.id==="DEL"){
                    const arr = string.split('');
                   // console.log(arr);
                    const length=arr.length-1;
                    let data = function() {
                         let displayData='';
                        for(let i=0;i<length;i++){
                            displayData += arr[i];
                            }
                            return displayData;
                    }
                    //console.log('this is',data());
                    string=data();
                    display.value=string;
                    

                }
                else{
                        if(e.target.id==='='){
                          if(string===''){
                            display.value="please enter some number";
                          }
                          
                          else{
                              string = String(eval(string));
                                display.value= string; 
                                localStorage.setItem('ANS',string) 
                                lastAns=localStorage.getItem("ANS") 
                                
                          }
                        }
                     
                        else{
                           if(e.target.innerHTML==="Ans"){
                            e.target.id=lastAns;
                            display.value=string+e.target.id;
                            string=display.value;
                            //console.log(e.target.id)
                           }
                            else{
                              string +=e.target.id;
                              display.value=string;
                              
                            }
                          }
                            
                    }
                
            }
           
            
    })
       
})



