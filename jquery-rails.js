/*
 * jQuery Rails Plugin
 *
 * Copyright (c) 2010 Robert Sosinski (http://www.robertsosinski.com)
 * Offical Web Site (http://github.com/robertsosinski/jquery-rails)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
(function($) {
  // ensure all ajax requests are of js format
  $.ajaxSetup({  
    beforeSend: function (xhr) {
      xhr.setRequestHeader("Accept", "text/javascript");
    }  
  }); 

  // reassign $.ajax to prevent recursion during its modification
  var _ajax = $.ajax;

  $.extend({
    ajax: function(settings) {
      settings.type = settings.type || "GET";
    
      if (!/^(get|post)$/i.test(settings.type)) {
        settings.data = settings.data || "";

        if (typeof settings.data !== "string") {
          settings.data = $.param(settings.data);
        }

        settings.data += (settings.data ? "&" : "") + "_method=" + settings.type.toLowerCase();
        settings.type = "POST";
      }

      return _ajax(settings);
    },

    put: function(url, data, callback, type) {
      // shift arguments if data argument was omited
      if ($.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = null;
      }

      return jQuery.ajax({
        type: "PUT",
        url: url,
        data: data,
        success: callback,
        dataType: type
      });
    },

    // delete is a reserved word, so appending an underscore
    delete_: function(url, data, callback, type) {
      // shift arguments if data argument was omited
      if ($.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = null;
      }

      return jQuery.ajax({
        type: "DELETE",
        url: url,
        data: data,
        success: callback,
        dataType: type
      });
    }
  });  
})(jQuery);
