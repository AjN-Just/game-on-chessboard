/* LES VARIABLES LOCALE A DAME */
let vet=0,  wipes=[],
    dep,  quit;

/* FONCTION POUR COMMENCER DAME */
function startDame(){
    for(var a in idd){
        if(cas[a].style.backgroundColor=='chocolate'){
            var pi=document.createElement('span'),
            n=idd[a].n;
            cas[a].appendChild(pi);
            if(n=='8' || n=='7'){
                cas[a].lastElementChild.className='bp';
            }else if(n=='2' || n=='1'){
                cas[a].lastElementChild.className='wp';
            }else{
                cas[a].lastElementChild.className='no';
            }
            
            cas[a].addEventListener('click', function(e){
                var d=e.target.lastElementChild.className;
                if((d[0]==start) || d=='no'){
                    nextTest(e.target);
                }else{alert("Ce n'est pas tour de "+d);}
            }, false);
        }else{
            cas[a].addEventListener('click', function(){
                alert('Veillez choisir une case Chocolate');
            },false);
        }
    }
}


/* FONCTION POUR L'ACTION DE CHAQUE CASE */
function nextTest(e){
    var co=e.lastElementChild.className, way;
    if(vet==0 && co!='no'){
        dep=co; quit=e;
        way=getWay(co);
        var free=frees(e, way, co), evi=[];
        if(free.length>0){
            for(var i in free){
                evi.push(free[i].c);
            }
            if(co[1]!='p'){
                for(var i in free){
                    var c=free[i].c, w=free[i].w;
                    var ff=frees(cas[c], w, co);
                    while(ff.length>0){
                        c=ff[0].c; w=ff[0].w;
                        evi.push(c);
                        va=valide(cas[c], w);
                        ff=frees(cas[c], w, co);
                    }
                }
            }
            freeEvi(evi);
        }
        e.style.backgroundColor='yellow';
        vet=1;
    }else{
        var bac=e.style.backgroundColor;
        if(bac=='green' || bac=='greenyellow'){
            way=getWay(dep);
            if(!valide(e, way)[0]){
                e.lastElementChild.className=dep[0]+'d';
            }else{
                e.lastElementChild.className=dep;
            }
            quit.lastElementChild.className='no';
            start=='w' ? start='b' : start='w' ;
            if(bac!='green'){
                for(var i in wipes){
                    if(wipes[i].n==e.id){
                        cas[wipes[i].w].lastElementChild.className='no';
                        break;
                    }
                }
                wipes=[];
                endVerify(e.lastElementChild.className);
            }
        }
        reint();
        vet=0;
    }
}


/* FONCTION POUR TROUVER LES DIRECTIONS POSSIBLE */
function getWay(co){
    var way;
    if(co=='wp'){
        way=[{x:-1, y:1}, {x:1, y:1}];
    }else if(co=='bp'){
        way=[{x:-1, y:-1}, {x:1, y:-1}];
    }else{
        way=[{x:-1, y:1}, {x:1, y:1}, {x:1, y:-1}, {x:-1, y:-1}] ;
    }
    return way;
}


/* FONCTION POUR TROUVER LES CASES VALIDES DE DEPLACEMENT */
function valide(e, way){
    var valid=[],
        w=getIdn(e).l , h=getIdn(e).n;
    for(var i in way){
        var wi=w+way[i].x, he=h+way[i].y;
        if((wi>0 && wi<9) && (he>0 && he<9)){
            valid.push({c:le[wi]+nu[he]+'d' , w:[way[i]]});
        }
    }
    return valid;
}


/*FONCTION POUR TROUVER LES CASES LIBRE DE DEPLACEMENT */
function frees(e, way, co){
    var valid=valide(e, way), free=[];
    for(var i in valid){
        var cla=cas[valid[i].c].lastElementChild.className;
        if(cla=='no'){
            free.push({c:valid[i].c , w:valid[i].w});
        }else if(cla[0]!=co[0]){
            nextTake(valid[i].c, valid[i].w);
        }
    }
    return free;
}

function freeEvi(d){
    for(var i in d){
        cas[d[i]].style.backgroundColor='green';
    }
}


/* FONCTION POUR VERIFIER POSSIBLITÉ DE PRENDRE PION */
function nextTake(c, w){
    var free=valide(cas[c], w);
    if(free[0] && cas[free[0].c].lastElementChild.className=='no'){
        cas[free[0].c].style.backgroundColor='greenyellow';
        cas[c].style.backgroundColor='rgba(245, 90, 43, 0.7)';
        wipes.push({n:free[0].c, w:c});
    }
}


startDame();