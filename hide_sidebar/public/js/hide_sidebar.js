// Hide the sidebar in the desk
frappe.ui.toolbar.Toolbar.prototype.make = function () {
    this.page.addClass('hide-sidebar');
};

// Apply CSS to hide the sidebar
frappe.ui.toolbar.Toolbar.prototype.setup_sidebar = function () {
    $('.layout-side-section').hide();
};