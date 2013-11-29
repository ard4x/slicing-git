// Script for Profile page

// SideBar
var $profileSidebar = $('#profileSidebar'),
    $contentId = $('#pageContent'),
    footerGutter = parseInt($contentId.css('padding-bottom')),
    blockHeight = $profileSidebar.outerHeight(),
    headerHeight = $('#pageHeader').height(),
    headerGutter = parseInt($contentId.css('padding-top'));

$(window).scroll(function(){
    var $document = $(document),
        indentTop = $document.scrollTop(),
        documentHeight = $document.height(),
        footerHeight = $('#pageFooter').height();
    if ( (documentHeight - indentTop) > (footerHeight + footerGutter + blockHeight + headerGutter + headerHeight) )
    {
        $profileSidebar.css('top', indentTop + 'px');
    }
});
// SideBar

// Tabs
// @TODO do it as plugin
$('._jTab').on('click', function(){             // When Tab clicked
    if (! $(this).hasClass('active')) {         //
        $('._jTab').each(function(){            // Deactivate all tabs
            $(this).removeClass('active');      //
        });
        $(this).addClass('active');             // Do current tab Active
        var content = $(this).data('content');  // Learn id of content for current tab
        $('._jTabContent').hide();                  // Hide all content of tabs
        $('#'+content).show();                  // Show content of current tab
    }
});
// Tabs

$(function(){
    $('._jShowAll').on('click', function(e){
        $(this).parent().parent().find('._jSimilar').css('height', 'auto');
        $(this).hide();
        e.preventDefault();
        return 0;
    });
});