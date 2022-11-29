//Extend the Flip Coin problem till either Heads or Tails wins 11 times.
let FlipCoin=1; 
let head=1;
let tail=1;
while(head<=12 && tail<=12)
{
    let n= Math.floor(Math.random()*10)%2;
    if(n==1)
    {
        console.log("Head");
        head++;
    }
    else
    {
        console.log("Tail");
        tail++;
    }

}
head=head-1;
tail=tail-1;
    console.log(head);
    console.log(tail);