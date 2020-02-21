var controller = new ScrollMagic.Controller();


//----------------scrumbed Paper----------------
var tlScrumPaper = new TimelineMax();
var elementPaper = document.getElementById("scrumPaper");

tlScrumPaper.to(elementPaper, .3, { rotation: 360, x: 300, ease: Linear.easeNone })
    .to(elementPaper, .6, { rotation: 0, x: 0, ease: Linear.easeNone })
    .to(elementPaper, .1, { autoAlpha: 0 })



var scenePaperFall1 = new ScrollMagic.Scene({ triggerElement: "#stage1", duration: 700 })
    .setPin(elementPaper)
    .setTween(tlScrumPaper)
    .addIndicators({ name: "1 (duration: 700)" }) // add indicators (requires plugin)
    .addTo(controller);


//----------------Bag----------------
var tlBag = new TimelineMax();
var elementBag = document.getElementById("bag");

tlBag.to(elementBag, .25, { ease: Linear.ease })
    .to(elementBag, .1, { scale: 1.3, ease: Linear.ease })
    .to(elementBag, .1, { scale: 1.1, ease: Linear.ease })
    .to(elementBag, .55, { scale: 1.1, ease: Linear.ease })
    .to(elementBag, .1, { rotation: 180, ease: Linear.ease })
var sceneBagCatch = new ScrollMagic.Scene({ triggerElement: "#stage2", duration: 700 })
    .setPin(elementBag)
    .setTween(tlBag)
    .addIndicators({ name: "2 (duration: 700)" }) // add indicators (requires plugin)
    .addTo(controller);


//----------------Bag----------------
var tlFloatPaper = new TimelineMax();
var elementFloatPaper = document.getElementById("paperFloating");

tlFloatPaper.to(elementFloatPaper, .25, { ease: Linear.ease })
    .to(elementFloatPaper, .1, { scale: 1.3, ease: Linear.ease })
    .to(elementFloatPaper, .1, { scale: 1.1, ease: Linear.ease })
    .to(elementFloatPaper, .55, { scale: 1.1, ease: Linear.ease })
    .to(elementFloatPaper, .1, { rotation: 180, ease: Linear.ease })
var sceneBagCatch = new ScrollMagic.Scene({ triggerElement: "#stag3Trigger", duration: 700 })
    .setPin(elementFloatPaper)
    .setTween(tlFloatPaper)
    .addIndicators({ name: "3 (duration: 700)" }) // add indicators (requires plugin)
    .addTo(controller);





var tlBox = new TimelineMax();
var elementBox = document.getElementById("balloon");

var bez = MorphSVGPlugin.pathDataToBezier("#motionPath",
    { align: elementBox }
);
tlBox.set(elementBox, { xPercent: -50, yPercent: -50 });
tlBox.to(elementBox, 2, { bezier: { values: bez, type: 'cubic' } });
tlBox.to(elementBox, 2, { rotation: -720, transformOrigin: "center center", }, 0);


var sceneBox = new ScrollMagic.Scene({ triggerElement: "#stage4", duration: 1600 })

    .setTween(tlBox)
    .addIndicators({ name: "4 (duration: 700)" }) // add indicators (requires plugin)
    .addTo(controller);
