// Copyright (c) 2017, frappe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Planning1', {
	onload: function(frm) {
		cur_frm.set_value("plan_owner",frappe.session.user)
	},
	refresh: function(frm) {

	},

});
