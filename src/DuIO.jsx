#include 'duio_required/DuIO_header.jsxinc'

var ui_tabs = DuAEF.DuScriptUI.addTabPanel(ui_contents);
var ui_importTab = ui_tabs.addTab("Import",DuAEF.DuBinary.toFile(w25_import_l),"Import",DuAEF.DuBinary.toFile(w25_import_r));
var ui_eTab = ui_tabs.addTab("Export",DuAEF.DuBinary.toFile(w25_exportfile_l),"Export",DuAEF.DuBinary.toFile(w25_exportfile_r));

#include 'duio_required/DuIO_import.jsxinc'
//#include 'duio_required/DuIO_export.jsxinc'

ui_tabs.setCurrentIndex(0);

#include 'duio_required/DuIO_footer.jsxinc'