if (click==0 || typeof click == 'undefined') { 
    document.body.contentEditable = 'true'; 
    document.designMode='on'; 
    void 0; 
    var click = 1; 
} else { 
    document.body.contentEditable = 'false';
    document.designMode='off'; 
    void 0; 
    var click = 0; 
}