Template.editContactForm.viewmodel('editContactForm',
  {

  }
);

Template.editContactForm.created = function () {
  console.log("editContactForm.onCreated");
};

Template.editContactForm.rendered = function () {
  console.log("editContactForm.onRendered");
};

Template.editContactForm.destroyed = function () {
  console.log("editContactForm.onDestroyed");
};