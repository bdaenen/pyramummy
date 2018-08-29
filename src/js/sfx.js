w.sfx = {
   jump: [0,,0.2,,0.28,0.3074,,0.1534,,,,,,0.3234,,,,,0.9451,,,,,0.5],
   powerup: [0,,0.1641,,0.473,0.4359,,0.0891,,0.6403,0.5956,,,0.3116,,,,,1,,,,,0.5],
   walk: [3,0.0415,0.0138,0.0187,0.1246,0.09,,-0.4599,-0.6891,-0.231,,-0.88,,,0.1729,0.2493,-0.3004,-0.84,1,1,0.73,0.28,-0.72,0.4],
   shoot: [2,,0.2412,0.2703,0.0431,0.6741,0.098,-0.3516,,,,,,0.2658,0.0979,,,,1,,,0.2715,,0.5],
   death: [3,0.0081,0.18,0.071,0.39,0.1123,,0.0098,-0.3124,-0.063,-0.5941,-0.456,,0.2767,-0.6031,-0.4776,0.197,0.0232,1,1,1,0.0085,0.98,0.5],
   hit: [3,,0.17,0.06,0.19,0.17,,-0.14,-0.62,,,-0.58,,,,,-0.3199,-0.2777,0.17,-0.76,,,-0.5,0.5],
   link: [2,0.3855,0.2848,0.1734,0.0158,0.5002,,-0.005,-0.4307,0.5716,0.4993,-0.1199,-0.6765,,,0.6028,0.8305,0.0227,0.2842,-0.0623,,0.1895,-0.2144,0.5]
};

w.generatedAudioFragments = {};

(function() {
    var keys = Object.keys(w.sfx);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var sfx = w.sfx[key];
        var soundURL = jsfxr(sfx);
        var player = new Audio();
        player.src = soundURL;
        w.generatedAudioFragments[key] = player;
    }
}());

w.playSfx = function(key) {
    w.generatedAudioFragments[key].play();
};
w.sfxIsPlaying = function(key) {
    return w.generatedAudioFragments[key].duration > 0 && !w.generatedAudioFragments[key].paused;
};
