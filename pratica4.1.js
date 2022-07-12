const lista = {

{
    name: "sabao em po",
    preco; 30

};
{
    name: "cereal",
    preco; 12,
}


{
    Name: "toalha";
    preco; 30,
}

}

const saldoDisponível = 100;

function calculaSaldo(saldoDisponível,lista){
    return lista.reduce(function(prev,current,index){
        console.log("rodada",index + 1);
        console.log((prev));
        console.log((current));
        return prev - current.preço;
        },saldoDisponível);

}

 console.log(calculaSaldo(saldoDisponível,lista));

        

     
