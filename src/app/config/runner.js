'use strict';

app.run(['ROUTE', '$transitions', '$trace',
    function (ROUTE, $transitions, $trace) {

        $trace.enable('TRANSITION');

        $transitions.onStart({}, function (trans) {
            console.log("transition starts");
        });

    }
]);
