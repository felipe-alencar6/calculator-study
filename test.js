let x = document.getElementById('num1')
let y = document.getElementById('num2')
// u é o valor escolhido pelo usuário
let u
// j é o resultado final
let j = 0
//string e bigstring é apenas visual e mostra a operação completa
let string
let bigstring = ' '
//contador para if
let k = 0

i = 0

var string2 = ''

function subtrai(){
    u = parseFloat(x.value)
    //document.getElementById('temp').innerText = u
    if (k==0){
        bigstring =  u.toString()
        j = u - j
        k = k+1
    }
        
    else 
       {
        bigstring = u.toString() +' - '+  bigstring
        j = j - u
        //document.getElementById('res').innerText = j
        string = document.getElementById('temp2')
        string.innerText =   bigstring
       }  
    
}
    


//x.addEventListener('change', soma )
//y.addEventListener('change', soma )
/*function soma(){
    u = parseFloat(x.value)
    //document.getElementById('temp').innerText = u
    if(k==0){
        bigstring =  u.toString()
        k = k+1
    } else
    bigstring = bigstring +' + '+  u.toString()  
    j = j + u
    //document.getElementById('res').innerText = j
    string = document.getElementById('temp2')
    string.innerText =   bigstring 
    
}
*/



function multiplica(){
    u = parseFloat(x.value)
    //document.getElementById('temp').innerText = u
    if (k==0){
        bigstring =  u.toString()
        j=1
        j = u * j
        k = k+1
    }
        
    else 
       {
        bigstring = u.toString() +' * '+  bigstring
        j = j * u
        //document.getElementById('res').innerText = j
        string = document.getElementById('temp2')
        string.innerText =   bigstring
       }  
    
}

function divide(){
    u = parseFloat(x.value)
    //document.getElementById('temp').innerText = u
    if (k==0){
        bigstring =  u.toString()
        j=1
        j = u / j
        k = k+1
    }
        
    else 
       {
        bigstring = u.toString() +' / '+  bigstring
        j = j / u
        //document.getElementById('res').innerText = j
        string = document.getElementById('temp2')
        string.innerText =   bigstring
       }  
    
}

function limpa(){
    string.innerText = ''
    k = 0
    j = 0
    document.getElementById('res').innerText = ''
}

function igual(){
    
    document.getElementById('res').innerText =  j
    
    
}

function del(){
    var array
    array = x.value.slice(0, -1)
    x.value = array
    
}

function soma(){
    
    i = Number(string2)
    j = j + i
    igual(j)
    console.log(i)
    
    console.log(j)
    
    
    string2 = ''
    string.innerText = string.innerText + '+'
    

}

function um(){
    
    string = document.getElementById('temp2')
    string.innerText =  string.innerText+ 1
    string2 = string2 + '1'
    console.log(string2)
    u = string2
    console.log(u)
    
}









