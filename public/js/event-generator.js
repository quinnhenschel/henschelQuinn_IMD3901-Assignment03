AFRAME.registerComponent('event-generator', {
    init: function() {
        const Context_AF = this;
        const el = Context_AF.el;
        const data = Context_AF.data;

        let scene = document.querySelector('a-scene');

        el.addEventListener('mousedown', function() {
            //Context_AF.eventLogic(el.id);
            clickedButton(el.id);
        });
        
    }
});