Package.describe({
  name: 'shankscoder:meteor-bulma-scss',
  version: '0.6.0',
  // Brief, one-line summary of the package.
  summary: 'This is an packaged scss version of the popular bulma css framework forked from chmanie:bulma-scss for frequent updates',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/shankscoder/bulma-scss',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');
  api.use([
    'meteor',
    'fourseven:scss'
  ]);
  api.addFiles([
    'dist/_bulma.scss',
    'dist/sass/base/__all.scss',
    'dist/sass/base/_minireset.scss',
    'dist/sass/base/_generic.scss',
    'dist/sass/base/_helpers.scss',
    'dist/sass/components/__all.scss',
    'dist/sass/components/_breadcrumb.scss',
    'dist/sass/components/_card.scss',
    'dist/sass/components/_dropdown.scss',
    'dist/sass/components/_level.scss',
    'dist/sass/components/_media.scss',
    'dist/sass/components/_menu.scss',
    'dist/sass/components/_message.scss',
    'dist/sass/components/_modal.scss',
    'dist/sass/components/_navbar.scss',
    'dist/sass/components/_pagination.scss',
    'dist/sass/components/_panel.scss',
    'dist/sass/components/_tabs.scss',
    'dist/sass/elements/__all.scss',
    'dist/sass/elements/_box.scss',
    'dist/sass/elements/_button.scss',
    'dist/sass/elements/_container.scss',
    'dist/sass/elements/_content.scss',
    'dist/sass/elements/_form.scss',
    'dist/sass/elements/_icon.scss',
    'dist/sass/elements/_image.scss',
    'dist/sass/elements/_notification.scss',
    'dist/sass/elements/_other.scss',
    'dist/sass/elements/_progress.scss',
    'dist/sass/elements/_table.scss',
    'dist/sass/elements/_tag.scss',
    'dist/sass/elements/_title.scss',
    'dist/sass/grid/__all.scss',
    'dist/sass/grid/_columns.scss',
    'dist/sass/grid/_tiles.scss',
    'dist/sass/layout/_footer.scss',
    'dist/sass/layout/_hero.scss',
    'dist/sass/layout/__all.scss',
    'dist/sass/layout/_section.scss',
    'dist/sass/utilities/__all.scss',
    'dist/sass/utilities/_animations.scss',
    'dist/sass/utilities/_controls.scss',
    'dist/sass/utilities/_derived-variables.scss',
    'dist/sass/utilities/_functions.scss',
    'dist/sass/utilities/_mixins.scss',
    'dist/sass/utilities/_initial-variables.scss'
  ], 'client', {isImport: true});
});
