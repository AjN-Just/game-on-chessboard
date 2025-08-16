function echiquier(di, cl, g){
    var le=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        no=['1', '2', '3', '4', '5', '6', '7', '8'];
    var gam=document.getElementById(di);

    /* CREATION DES LETTRES DE L'ECHIQUIER */
    var let=document.createElement('div');
    let.className='let';
    for(var i in le){
        var nav=document.createElement('nav'),
            co=document.createElement('p');
        co.appendChild(document.createTextNode(le[i]));
        nav.appendChild(co)
        let.appendChild(nav);
    }

    /* CREATION DES NUMEROS DE L'ECHIQUIER */
    var nu=document.createElement('div');
    nu.className='nu';
    for(var i in no){
        var nav=document.createElement('nav'),
            co=document.createElement("p");
        nav.style.width='100%';
        co.appendChild(document.createTextNode((9-parseInt(no[i]))+''));
        nav.appendChild(co);
        nu.appendChild(nav);
    }

    /*CREATION DES CASES DE L'ECHIQUIER*/
    var ech=document.createElement('div');
    ech.id='ech';
    for(var i in no){
        var div=document.createElement('div');
        div.className='div';
        for(var a in le){
            var ca=document.createElement('button'),
                st=ca.style;
            ca.className=cl;
            ca.id=le[a]+(9-parseInt(no[i]))+g;
            parseInt(i)%2==parseInt(a)%2 ? st.backgroundColor='bisque' : st.backgroundColor='chocolate';
            div.appendChild(ca);
        }
        ech.appendChild(div);
    }

    /* AJOUT DES PARTIES DE L'ECHIQUIER DANS LE JEU */
    gam.appendChild(let);
    gam.appendChild(nu);
    gam.appendChild(ech);
}