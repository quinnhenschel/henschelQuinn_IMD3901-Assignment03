AFRAME.registerComponent('position-sender', {
    init: function() {
        const Context_AF = this;
        const el = Context_AF.el;
        const data = Context_AF.data;

        let scene = document.querySelector('a-scene');

        player1 = document.querySelector('#cameraRig');
        player1_position = JSON.parse(JSON.stringify((player1.object3D.position)));
        sendPosition(player1_position);
        
    },
    tick: function()
    {
        player1 = document.querySelector('#cameraRig');
        player1_position = JSON.parse(JSON.stringify((player1.object3D.position)));
        sendPosition(player1_position);
    }
});