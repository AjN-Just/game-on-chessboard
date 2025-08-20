/* CREATION DES 'GLOBAL VAR' */
(function(){
    var plag=document.getElementsByClassName('case');
    window.dam=document.getElementById('dam');
    window.echec=document.getElementById('echec');
    window.ancel=document.getElementById('cancel');
    window.st=document.getElementById('start');
    window.dame=document.getElementById('dame');
    window.ches=document.getElementById('chess');
    window.le=['','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',''];
    window.nu=['','1', '2', '3', '4', '5', '6', '7', '8',''];
    window.idd={}; // ENUMERATION DES NOMS DE CASE 'ID'
    window.cas={}; // RECUPERATION DE CHAQUE CASE 'OBJET HTML'  
    for(var i=0; i<plag.length; i++){
        var a=plag[i].id;
        idd[a]={l:a[0] , n:a[1]};
        cas[a]=document.getElementById(a);
    } window.start='w';
})();


/* EVENEMENT POUR ANNULER PARTIE */

ancel.addEventListener('click', function(e){
    if(!confirm('Voulez-vous vraiment annuler la partie en cours')){
        e.preventDefault();
    }
}, false);



/* FONCTION POUR TRANSFORMER LES ID EN NUMEROS DE CASE */
function getIdn(e){
    var w, h;
    for(var i=0; i<le.length; i++){
        (idd[e.id].l==le[i]) ? w=i : w ;
        (idd[e.id].n==nu[i]) ? h=i : h ;
    }
    return {l:w , n:h};
}


/*FONCTION POUR VERIFIER LA FIN DU JEU */
function endVerify(col){
    var per, nper=0;
    col[0]=='w' ? per='black' : per='white';
    for(var i in idd){
        if(cas[i].style.backgroundColor!='bisque'){
            var ca=cas[i].lastElementChild.className;
            if(ca[0]==per[0]){
                nper++ ;
                break;
            }
        }
    }
    if(nper==0){
        alert('Les '+per+' ont perdus');
        start='w';
    }
}


/* FOONCTION POUR REINITIALISER LA COULEUR DES CASES */
function reint(){
    for(var i in idd){
        if(cas[i].style.backgroundColor!='bisque'){
            cas[i].style.backgroundColor='chocolate';
        }
    }
}