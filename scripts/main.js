$(function () {

    // Preloader
    // var $preloader = $('#page-preloader'),
    //     $spinner   = $preloader.find('.spinner');
    // $spinner.fadeOut();
    // $preloader.delay(350).fadeOut('slow');

    /* Параллакс от движения мыши */
    if ($(window).width() > 960)
    {
        $('body').parallax({
            'elements': [
                {
                    'selector': '.ellips',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 3,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': -5,
                                'multiplier': 0.002,
                                'unit': '%',
                                'invert': true
                            }
                        }
                    }
                },
                {
                    'selector': '.lines-dot',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 87,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': 5,
                                'multiplier': 0.0009,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.plus-yellow',
                    'properties': {
                        'x': {
                            'right': {
                                'initial': 65,
                                'multiplier': 0.001,
                                'unit': '%',
                                'invert': false
                            }
                        },
                        'y': {
                            'bottom': {
                                'initial': 55,
                                'multiplier': 0.001,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                },
                {
                    'selector': '.rnb-man',
                    'properties': {
                        'x': {
                            'left': {
                                'initial': 10,
                                'multiplier': 0.003,
                                'unit': '%',
                                'invert': false
                            }
                        }
                    }
                }
            ]
        });
    };
});