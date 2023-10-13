const p=document.getElementById ('count')
let c=0;
function Increment()
{
    do{
        c++;
        p.textContent=c;    
    }while(c>20)
}
function Decrement()
{
    c--;
    p.textContent=c;
}
function Reset()
{
    c=0;
    p.textContent=c;
}