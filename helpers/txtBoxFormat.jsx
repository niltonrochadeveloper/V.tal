export function txtBoxFormat(strField, sMask, evtKeyPress) {
    var i, nCount, sValue, fldLen, mskLen,bolMask, sCod, nTecla;

    if(document.HTMLAllCollection) { // Internet Explorer
        nTecla = evtKeyPress.keyCode;
    }
    else if(document.layers) { // Nestcape
        nTecla = evtKeyPress.which;
    }
    else if(document.getElementById) { // FireFox
        nTecla = evtKeyPress.which;
    }

    if (nTecla != 8) {

    sValue = document.getElementById(strField).value;

    // Limpa todos os caracteres de formatação que
    // já estiverem no campo.
    sValue = sValue.toString().replace( "-", "" );
    sValue = sValue.toString().replace( "-", "" );
    sValue = sValue.toString().replace( ".", "" );
    sValue = sValue.toString().replace( ".", "" );
    sValue = sValue.toString().replace( "/", "" );
    sValue = sValue.toString().replace( "/", "" );
    sValue = sValue.toString().replace( "(", "" );
    sValue = sValue.toString().replace( "(", "" );
    sValue = sValue.toString().replace( ")", "" );
    sValue = sValue.toString().replace( ")", "" );
    sValue = sValue.toString().replace( " ", "" );
    sValue = sValue.toString().replace( " ", "" );
    sValue = sValue.toString().replace( ":", "" );
    fldLen = sValue.length;
    mskLen = sMask.length;

    i = 0;
    nCount = 0;
    sCod = "";
    mskLen = fldLen;

    while (i <= mskLen) {
    bolMask = ((sMask.charAt(i) == "-") || (sMask.charAt(i) == ".") || (sMask.charAt(i) == "/"))
    bolMask = bolMask || ((sMask.charAt(i) == "(") || (sMask.charAt(i) == ")") || (sMask.charAt(i) == " "))
    bolMask = bolMask || (sMask.charAt(i) == ":")

    if (bolMask) {
    sCod += sMask.charAt(i);
    mskLen++; }
    else {
    sCod += sValue.charAt(nCount);
    nCount++;
    }

    i++;
    }

    //objForm[strField].value = sCod;
    document.getElementById(strField).value = sCod;

    if (nTecla != 8) { // backspace
        if (sMask.charAt(i-1) == "9") { // apenas números...
            return ((nTecla > 47) && (nTecla < 58)); } // números de 0 a 9
        else { // qualquer caracter...
            return true;
        }
    }
    else {
        return true;
    }
    }
} 
