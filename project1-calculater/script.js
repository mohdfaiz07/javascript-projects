let btns = document.querySelectorAll('.btn');
let result = document.querySelector('.result')
    
let data = '';

btns.forEach( function(btn){
    btn.addEventListener('click', function(){
        btn.classList.add('active');
        setTimeout(() => {
                btn.classList.remove('active')
        }, 200);
       
        try{

            if(btn.innerText == 'C'){
                data = ''
                result.value = data
             }
         
             else if (btn.innerText == '='){
                 result.value = eval(data)
         
             }
             else if(btn.innerText == 'Dlt'){
                data =  data.slice(0,-1)
                result.value = data
     
             }
             else{
       
                 data += btn.innerText
                 result.value = data
                
             }
     

        }
        catch(error){
            result.value = error
        }



    })

} )