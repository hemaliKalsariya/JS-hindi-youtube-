//  Imediately Invoked Function Expressions (IIFE)


(function chai(){
                                                                        // named IIFE
    console.log('HB connected');
})();


( (name) => {
                                                                    // simpal IIFE peramitor pass
    console.log(`hb connected ${name}`);
    
})("hemu")


( () => {
                                                                    // non named IIFE
    console.log(`hb connected`);
    
})()

