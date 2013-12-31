var activities = [ "drink Coffee", "play Xbox", "read Sci-fi" ],
    activity_index = 1;
    ACTIVITY_CHANGE_INTERVAL = 3000;

var activity = $("#activity");

setInterval( function() {
    activity.fadeTo(200, 0, function() {
        activity.html(activities[ (activity_index++) % (activities.length) ]).fadeTo(200, 1);
    });
}, ACTIVITY_CHANGE_INTERVAL);
