## OrgSync ZenDesk Theme

### Makeup of this Repo

All the files in this main directory are named to match the layouts defined in ZenDesk's custom theme editor.
The CSS.css and JS.js are for their respective tabs in the editor.
The assets folder is any files that are uploaded to the assets tab.

### How To Update

Login to the helpdesk http://help.orgsync.com with the 'supportteam' login to gain admin access. After you are logged in an admin overlay will appear in the bottom right and you can click 'customize design.' From here you can update the different views and assets.

You can click through the different layouts and preview them with different permission levels. The *Community* feature (which is like a forum) is not editable like all of the other layouts. You can't use the select dropdown to preview them, you must just navigate to them through the site preview (click ideas from the homepage to see the ideas forum.). We can't update the markup of these pages like we can with the regular layout -- so you must use JS workarounds (below) if you need to do something more advanced here.

### JS Workarounds
If we want to do anything truly custom, or modify the widgets that ZenDesk provides, or work on the *community* feature then we must use some JS hacky-hack-hack workarounds. These are defined in js.js and aren't nearly as bad as they were in the old zendesk theme but they're still gross. Make sure they are well commented.
