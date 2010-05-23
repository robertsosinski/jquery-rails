jQuery-Rails Plugin
===================

jQuery-Rails adds Ruby on Rails style restful HTTP verbs to the jQuery library.
Instead of sending an actual PUT or DELETE request (many browsers only support 
GET and POST), jQuery will make a POST request with an additional data parameter 
called _method set to the proper verb.  Ruby on Rails can then act accordingly.

Usage
=====

You can use the `$.ajax` method with "put" and "delete".

    $.ajax({
      url: "fruites/123",
      type: "put",
      data: {
        "a": "apple",
        "b": "banana"
      }
    });

jQuery will then format a POST request with _method set as "put".

    _method	put
          a	apple
          b	banana

You can also use the additional shorthand methods, `$.put` and `$.delete_`.  

NOTE: jQuery-Rails uses "delete_" with a trailing underscore as "delete" is a 
reserved word in JavaScript, and its usage fails on certain browsers.

    $.delete_("fruits/123", {"c": "cherry"}, function(message) {
      alert(message);
    });

And jQuery will format a POST request with _method set as "delete".

    _method	delete
          c	cherry

Feedback
========

If you have any questions, comments or just want to talk shop about JavaScript, feel free to reach me 
through my website at http://www.robertsosinski.com.

