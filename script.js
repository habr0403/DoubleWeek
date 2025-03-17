$(document).ready(function() {
    let currentStep = 1;
    const totalSteps = 3;

    // Show the tutorial overlay when the user clicks "Start Tutorial"
    $('#start-tutorial').click(function() {
        $('.tutorial-overlay').fadeIn();
        showStep(currentStep);
    });

    // Show the appropriate tutorial step
    function showStep(step) {
        $('.tutorial-step').hide(); // Hide all steps
        $('#step' + step).fadeIn(); // Show the current step
        
        // Highlight the corresponding feature
        $('.feature').removeClass('highlight');
        $('#feature' + step).addClass('highlight');
        
        // Update progress indicator
        $('#progress-text').text(`Step ${step} of ${totalSteps}`);
    }

    // Handle next step button click
    $('.next-step').click(function() {
        if (currentStep < totalSteps) {
            currentStep++;
            showStep(currentStep);
        }
    });

    // Close the tutorial
    $('.close-tutorial').click(function() {
        $('.tutorial-overlay').fadeOut();
    });

    // Event delegation for clicks on tutorial steps
    $('.tutorial-overlay').on('click', '.next-step, .close-tutorial', function(e) {
        e.stopPropagation();
    });

    // Highlighting elements with animation
    $('.feature').on('mouseenter', function() {
        $(this).animate({ backgroundColor: '#e0e0e0' }, 200);
    }).on('mouseleave', function() {
        $(this).animate({ backgroundColor: '#f0f0f0' }, 200);
    });
});
