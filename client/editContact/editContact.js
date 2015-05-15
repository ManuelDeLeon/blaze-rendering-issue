Template.editContact.helpers({
  cardViewModel: function() {
    return Session.get("editContactForm-rendered");
  }
});

Template.editContact.created = function () {
  console.log("editContact.onCreated");
};

Template.editContact.rendered = function () {
  console.log("editContact.onRendered");
  if (this.$("#card").length > 0) {
    console.log("============= editContact rendered with a card! =============");
  }
};

Template.editContact.destroyed = function () {
  console.log("editContact.onDestroyed");
};