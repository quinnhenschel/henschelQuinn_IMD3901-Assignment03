AFRAME.registerComponent('swap-pointer', {
    init: function() {
        const Context_AF = this;
        const el = Context_AF.el;
        const data = Context_AF.data;

        let scene = document.querySelector('a-scene');
        cursor = document.querySelector('#cursor');



        document.addEventListener('mousedown', function() {
            cursor.setAttribute('geometry', {primitive: 'ring', radiusInner: 0.1, radiusOuter: 0.1});
            console.log("get rid of it now");

        });

        document.addEventListener('mouseup', function() {
            cursor.setAttribute('geometry', {primitive: 'ring', radiusInner: 0.01, radiusOuter: 0.02, color: 'white'});
            console.log("get rid of it now");

        });

       
    }

});