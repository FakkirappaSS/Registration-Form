$(document).ready(function() {
    $('#registrationForm').on('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting normally

        // Show a loading indicator
        $('#result').html('<p>Submitting...</p>').show();

        // Gather form data
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val()
        };

        // Validate the inputs
        if (formData.name && formData.email && formData.phone) {
            // AJAX request to submit data
            $.ajax({
                type: 'POST',
                url: 'registration.php',
                data: formData,
                success: function(response) {
                    // Display success message with animation
                    $('#result').html(response).fadeIn();
                    $('#registrationForm')[0].reset(); // Clear form
                },
                error: function(xhr, status, error) {
                    // Display detailed error message from AJAX
                    console.log("AJAX Error: " + error); // Log error in console
                    $('#result').html('<p style="color:red;">There was an error submitting the form. Please try again later.</p>').fadeIn();
                }
            });
        } else {
            alert('Please fill out all fields!');
        }
    });
});
