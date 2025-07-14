# Embedding booking form on a Shopify website

To add the booking form to your Shopify website, follow these steps:

## **1 - Duplicate your live theme**

Begin by making a duplicate of your current theme. This serves as a backup in case any changes need to be reverted.

- Navigate to "Online Store" > "Themes" in your Shopify admin panel.
- Under the "Current Theme" section, locate the "Actions" dropdown menu.
- Select "Duplicate" from the dropdown menu.

Shopify will take a moment to create a duplicate of your live theme.

## **2 - Edit code**

- Go to the booking form settings section.
- Copy the code provided in step 1 of the Let's Book embed setup.
- Now, head over to your Shopify admin panel.
- Click on "Online Store" and then select "Themes."
- Find your newly duplicated theme, select the Actions drop down
- Select Edit Code

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/5ec3f479042863474d1b00dc/images/661fe732865f732a9766a1dc/file-WyZTx6OvFW.png)

## **3 - Edit theme.liquid and add your snippet**

- Locate the theme.liquid file under the "Layout"
- Open the theme.liquid file and use CMD + F (Mac) or CTRL + F (Windows) to open the search bar.
- Enter "`</head>`" in the search bar (include the /).
- _Be sure to include the\***\*/\*\***in `</head>`, without the / is `<head>` and this is the opening tag. If you put code above this, it won't work._
- This will take you to the closing tag, or the end of `<head>` section of your code. _Generally, you want to put all your snippets, just\***\*above\*\***this closing tag._
- Add your snippet by pasting it on the line directly above the `</head>` tag.

    _If there's code directly above it, just add in extra lines between them with the ENTER or RETURN key._

- Be careful not to overwrite or remove any other code. Removing a single < or > accidentally can actually cause the code (ie. your site) to no longer function.
- Hit Save
- You can also hit the 'Older versions' link that appears at the top if you need to rollback to a previous version of this file, in case something goes wrong.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/5ec3f479042863474d1b00dc/images/661fe8bc865f732a9766a1de/file-qsWIC7B3nX.png)

## **4 - Preview & publish your theme**

- Navigate to Online Store > Themes
- Find the Theme you've been working, select the Actions drop down
- Select "Preview" to see how your changes look.
- If everything looks good, hit "Publish" to make your changes live.

## **5 - Link to the booking form**

- Go back to the booking form settings and scroll to 'step 2'.
- Generate the URL provided in the Let's Book widget. There are some smart customize options such as language, boat model, dock, etc.
- Now link you buttons / tekst to this url's. The booking form will automatically open on top of your website.

![](https://d33v4339jhl8k0.cloudfront.net/docs/assets/5ec3f479042863474d1b00dc/images/661fec90e6d7a114e7690de0/file-o5Wdo9cMfX.png)
