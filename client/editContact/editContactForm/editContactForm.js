Session.set("editContactForm-rendered", false);

Template.editContactForm.created = function () {
  console.log("editContactForm.onCreated");
};

Template.editContactForm.rendered = function () {
  console.log("editContactForm.onRendered");
  Session.set("editContactForm-rendered", true)
};

Template.editContactForm.destroyed = function () {
  console.log("editContactForm.onDestroyed");
};