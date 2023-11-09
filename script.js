function getPilihanKomputer(){
    const komp = Math.random();

    if(komp <0.34) return 'kertas';
    if(komp >= 0.34 && komp< 0.67) return 'gunting';
    return 'batu';
}

function gethasil(komp, player){
    if(player == komp) return 'SERI';
    if(player == 'kertas') return (komp == 'gunting') ? 'KALAH' : 'MENANG';
    if(player == 'gunting') return (komp == 'kertas') ? 'MENANG' : 'KALAH';
    if(player == 'batu') return (komp == 'gunting') ? 'MENANG' : 'KALAH';
}

// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function(){
//     alert('Ok');
// })


//cara pertama
// const pKertas = document.querySelector('.kertas');
// pKertas.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pKertas.className;
//     const hasil = gethasil(pilihanKomputer, pilihanPlayer);
//     // console.log('Komp : '+ pilihanKomputer);
//     // console.log('Player : '+ pilihanPlayer);
//     // console.log('Hasil : '+ hasil);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'aset/' + pilihanKomputer +'.png')

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pGunting = document.querySelector('.gunting');
// pGunting.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGunting.className;
//     const hasil = gethasil(pilihanKomputer, pilihanPlayer);
//     // console.log('Komp : '+ pilihanKomputer);
//     // console.log('Player : '+ pilihanPlayer);
//     // console.log('Hasil : '+ hasil);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'aset/' + pilihanKomputer +'.png')

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

// const pBatu = document.querySelector('.batu');
// pBatu.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pBatu.className;
//     const hasil = gethasil(pilihanKomputer, pilihanPlayer);
//     // console.log('Komp : '+ pilihanKomputer);
//     // console.log('Player : '+ pilihanPlayer);
//     // console.log('Hasil : '+ hasil);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'aset/' + pilihanKomputer +'.png')

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// })

//cara kedua
// function putar(){
//     const imgKomputer = document.querySelector('.img-komputer');
//     const gambar = ['kertas', 'gunting', 'batu'];
//     let i = 0;
//     const waktuMulai = new Date().getTime();
//     setInterval(function(){
//         if(new Date().getTime() - waktuMulai > 100){
//             clearInterval;
//             return
//         }
//         imgKomputer.setAttribute('src', 'aset/' + gambar[i++] + '.png');
//         if(i == gambar.length) i = 0;
//     }, 100)
// }

// const pilihan = document.querySelectorAll('li img');
// pilihan.forEach(function(pil){
//     pil.addEventListener('click', function(){
//         const pilihanKomputer = getPilihanKomputer();
//         const pilihanPlayer = pil.className;
//         const hasil = gethasil(pilihanKomputer, pilihanPlayer);

//         putar();
        
//         setTimeout(function(){
//             const imgKomputer = document.querySelector('.img-komputer');
//         imgKomputer.setAttribute('src', 'aset/' + pilihanKomputer +'.png')
        
//         const info = document.querySelector('.info');
//         info.innerHTML = hasil; 
//         },1000);
           
//     })
// })

function putar(){
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['kertas', 'gunting', 'batu'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'aset/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100)
};


const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil) {
    pil.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;
        const hasil = gethasil(pilihanKomputer, pilihanPlayer);
    
        putar();
    

        setTimeout(function(){
            const imgkomputer = document.querySelector('.img-komputer');
            imgkomputer.setAttribute('src', 'aset/' + pilihanKomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000);
    })
});
