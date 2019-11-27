//modo um da função fatorial
function fatorial(n)
{
    let product = 1
    while(n > 1)
    {
        product *= n
        n--
    }
    return product
}
console.log(fatorial(4))

//modo dois da função fatorial
function fatorial2(n)
{
    let i, product = 1
    for(i = 1; i<=n; i++)
        product *= i

    return product    
}
console.log(fatorial2(5))