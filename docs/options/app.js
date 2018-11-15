/*var os = new OptionsScreen([3, 1, 0, 1]);
os.displayOptionsScreen();
//os.createEventListeners();
*/

var cl = new ContentList();
cl.addContent(new Content("Mouse","https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.yfCHb4ORK5on68Blr3790AHaGk%26pid%3D15.1&f=1"));
cl.addContent(new Content("Keyboard","https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.oLzzY56WjXJuBpSs2u_2kgHaEF%26pid%3D15.1&f=1"));
cl.addContent(new Content("Not so old monitor but enough","https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uF23jqmwh46WYGcO7nUt3gHaFS%26pid%3D15.1&f=1"));
cl.addContent(new Content("Notebook","https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lowyat.net%2Fwp-content%2Fuploads%2F2017%2F09%2Fmi-notebook-pro-hands-on-11.jpg&f=1"));

var cList = cl.getList();
console.log("First item: " + cList[0].getContentName());

var cs = new ContentScreen(cList);
cs.displayContentScreen();
