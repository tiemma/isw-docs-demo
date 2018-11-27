//= require ../lib/_jquery
(function (global) {
    'use strict';
    window.onload = () => {
        $("a#hide-button").on("click", function () {
            let hideClass = "hide-all";
            $(".dark-box").toggleClass(hideClass);
            $("a#hide-button").toggleClass("active");
            $("blockquote").toggle(hideClass);
            $("pre").toggleClass(hideClass);
            $("div.content").toggleClass("remove-margin");
        });
    }
})(window);