![CONNECT 4](documentation/Connect-4-logo.png)

---

# _Connect 4_

The CONNECT 4 website is an interactive two player game for entertainment purposes. It has an intuitive and responsive design which allows the user to compete against a friend or foe in the classic batle to be the first to connect for colored discs in a row.
The site can be accessed by this [link](https://johanplar.github.io/connect-4/)

![Responsive Mockup](documentation/responsive-mockup.png)

---

## User Stories

### First Time Visitor Goals:

- As a First Time Visitor, I want to easily understand the main purpose of the site, so I can learn more about the game application.
- As a First Time Visitor, I want to be able to easily navigate through the website, so I can find the content.
- As a First Time Visitor, I want to quickly acces the game.

### Returning Visitor Goals:

- As a Returning Visitor, I want to continue to play and set higher scores against my opponent.

### Frequent Visitor Goals:

- I want to become a seasoned CONNECT 4 master.

## Features

- ### Main Menu

- #### Main Menu Buttons

  - Positioned at the center of the page for clear visibility.
  - Two buttons let's the user to choose either to start the game or to read the rules of the game.
    ![Main Menu](documentation/main-menu.png)

- ##### Start Button
  - By clicking the Start Button the Game Area is being shown and the Main Menu is hidden. This is achieved by closing a modal and setting the Game Area to be displayed. No redirection of URL:s are being used instead the the stylesheet is being manipulated by the script.js file.
- ##### Rules Button

  - By clicking the Rules button the user will access CONNECT 4- list of rules placed on top of the main menu modal. A span with a closing x is being used to allow the user to return to the Main Menu

  ***

- ### Home Page

  - Represent:

    - A simple yet enjoyable game experience.
    - Clean and simple game mechanics to allow an intuitive interaction.
    - Automatically Checks who's is winning and keeps track of the score.

  ![Home Page](documentation/home-page.png)

- #### Game Board

  - Seven columns and six rows shows the slots where the users can drop their game coins. Placed on top under the Logo.

  ![Game Board Section](documentation/game-board.png)

- #### Players Area

  - Shows which players turn is next controlled in the script.js file.
  - Shows the score between the players also controlled in the script.js.

  ![Game Board Section](documentation/game-board.png)

  ***

- #### Footer

  - Footer contains an author copyright declaration.

  ![Footer](documentation/footer.png)

---

## Technologies Used

- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) was used as the foundation of the site.
- [CSS](https://developer.mozilla.org/en-US/docs/Web/css) - was used to add the styles and layout of the site.
- [CSS Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout) - was used to arrange items symetrically on the pages.
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid) - was used to make "gallery" page responsive.
- [CSS roots](https://developer.mozilla.org/en-US/docs/Web/CSS/:root) was used to declaring global CSS variables and apply them throughout the project.
- [Balsamiq](https://balsamiq.com/) was used to make wireframes for the website.
- [Visual Studio Code](https://code.visualstudio.com/) was used as the main tool to write and edit code.
- [Git](https://git-scm.com/) was used for the version control of the website.
- [GitHub](https://github.com/) was used to host the code of the website.
- [Website Mockup Generator](https://websitemockupgenerator.com/) Was used to create the responsive Mockup png for Readme file visualisation.
- [ezgif](https://ezgif.com/) Was used to create gif animations for Readme file visualisation.

---

## Design

### Color Scheme

![Color pallet](documentation/color-pallet.png)

- Blue color was used as the main color of the website to represent the evening sky and the ocean.

- Light Blue Color was used as a contrast to the darker blue to resemble clear blue mid day sky.

- Sandybrown is used as a contrast color and was picked from the setting sun present in the hero-image and used as font-color.

- Limestone white was picked to represent the limestone house colors of Villa Solhem also present at the many Gotland beaches.

### Typography

![Main Font](documentation/primary-font.png)

- Zen Kaku Gothic Antique was used as the main font and Logo text of the website in order to increase readability.

![Accent Font](documentation/accent-font.png)

- IBM Plex Serif was used to contrast headlines on cards from the main font to accentuate info cards.

### Wireframes

#### Mobile devices

- [Home Page. Mobile Screen](documentation/mobile-home-page.png)
- [Gallery Page. Mobile Screen](documentation/mobile-gallery-page.png)
- [Booking Page. Mobile Screen](documentation/mobile-booking-page.png)
- [Thank You Page. Mobile Screen](documentation/mobile-thank-you-page.png)

#### Tablets

- [Home Page. Tablet Screen](documentation/tablet_home_page.png)
- [Gallery Page. Tablet Screen](documentation/tablet-gallery-page.png)
- [Booking Page. Tablet Screen](documentation/tablet-booking-page.png)
- [Thank You Page. Tablet Screen](documentation/tablet-thank-you-page.png)

#### Desktop

- [Home Page. Desktop Screen](documentation/desktop-home-page.png)
- [Gallery Page. Desktop Screen](documentation/desktop-gallery-page.png)
- [Booking Page. Desktop Screen](documentation/desktop-booking-page.png)
- [Thank You Page. Desktop Screen](documentation/desktop-thank-you-page.png)

---

## Testing

In order to confirm the correct functionality, responsiveness, and appearance:

- The website was tested on the following browsers: Chrome, Firefox, Edge.

  - Chrome:

  ![Chrome](documentation/browsers-chrome.gif)

  - FireFox:

  ![FireFox](documentation/browsers-firefox.gif)

  - Edge:

  ![Edge](documentation/browsers-edge.gif)

- The website was checked by devtools implemented in Edge and Chrome browsers.

  - Main Page:

  ![Main Page](documentation/responsiveness-main-page.gif)

  - Gallery Page:

  ![Gallery Page](documentation/responsiveness-gallery-page.gif)

  - Booking Page:

  ![Booking Page](documentation/responsiveness-booking-page.gif)

  - Thank You Page:

  ![Thank You Page](documentation/responsiveness-thank-you-page.gif)

* The website was checked with [Responsive Website Design Tester](https://responsivedesignchecker.com/).

  - Desktop Screens:
    ![Desktop 1920x1200](documentation/desktop-1920-1200.gif)
    ![Desktop 1920x1080](documentation/desktop-1920-1080.gif)
    ![Desktop 1680x1050](documentation/desktop-1680-1050.gif)
    ![Desktop 1600x900](documentation/desktop-1600-900.gif)
    ![Desktop 1440x900](documentation/desktop-1440-900.gif)
    ![Desktop 1366x768](documentation/desktop-1366-768.gif)
    ![Desktop 1024x800](documentation/desktop-1024-800.gif)
    ![Desktop 1024x600](documentation/desktop-1024-600.gif)

  - Tablet Screens:
    ![Tablet 1366x1024](documentation/tablet-1366-1024.gif)
    ![Tablet 1024x768](documentation/tablet-1024-768.gif)
    ![Tablet 800x1280](documentation/tablet-800-1280.gif)
    ![Tablet 768x1024](documentation/tablet-768-1024.gif)  
    ![Tablet 600x960](documentation/tablet-600-960.gif)

  - Mobile Screens:

  ![Mobile 320x480](documentation/mobile-320-480.gif)
  ![Mobile 320x568](documentation/mobile-320-568.gif)
  ![Mobile 360x640](documentation/mobile-360-640.gif)
  ![Mobile 375x667](documentation/mobile-375-667.gif)
  ![Mobile 384x640](documentation/mobile-384-640.gif)
  ![Mobile 411x731](documentation/mobile-411-731.gif)
  ![Mobile 414x736](documentation/mobile-414-736.gif)

- The functionality of the links in the website was checked as well by different users.

### Manual testing

| feature                            | action                                      | expected result                              | tested | passed | comments                                                                                                              |
| ---------------------------------- | ------------------------------------------- | -------------------------------------------- | ------ | ------ | --------------------------------------------------------------------------------------------------------------------- |
| Navbar                             |                                             |                                              |        |        |                                                                                                                       |
| Home                               | Click on the "Home" link                    | The user is redirected to the main page      | Yes    | Yes    | -                                                                                                                     |
| Gallery                            | Click on the "Gallery" link                 | The user is redirected to the gallery page   | Yes    | Yes    | -                                                                                                                     |
| Contact                            | Click on the "Book!" link                   | The user is redirected to the booking page   | Yes    | Yes    | -                                                                                                                     |
| Footer                             |                                             |                                              |        |        |                                                                                                                       |
| Email icon in the footer           | Click on the Email icon                     | The user activates the mailto feature        | Yes    | Yes    | -                                                                                                                     |
| Instagram icon in the footer       | Click on the Instagram icon                 | The user is redirected to the Instagram page | Yes    | Yes    | -                                                                                                                     |
|                                    |
| Facebook icon in the footer        | Click on the Facebook icon                  | The user is redirected to the Facebook page  | Yes    | Yes    | -                                                                                                                     |
| Twitter icon in the footer         | Click on the Twitter icon                   | The user is redirected to the Twitter page   | Yes    | Yes    | -                                                                                                                     |
| Home page                          |                                             |                                              |        |        |                                                                                                                       |
| "Book Now!" button in Main section | Click on the "Book Now!" button             | The user is redirected to the booking page   | Yes    | Yes    | -                                                                                                                     |
| Gallery page                       |                                             |                                              |        |        |                                                                                                                       |
| Image in the gallery               | User hover the image                        | Image scales for better visibility           | Yes    | Yes    | -                                                                                                                     |
| Bookig page                        |                                             |                                              |        |        |                                                                                                                       |
| Arrival                            | Enter arrival date                          | The arrival date is entered                  | Yes    | Yes    | If user doesn't enter arrival date, the error message appears                                                         |
| Departure                          | Enter arrival date                          | The departure date is entered                | Yes    | Yes    | If user doesn't enter departure date, the error message appears                                                       |
| First name input                   | Enter the first name                        | The first name is entered                    | Yes    | Yes    | If user doesn't enter the first name, the error message appears                                                       |
| Last name input                    | Enter the last name                         | The last name is entered                     | Yes    | Yes    | If user doesn't enter the last name, the error message appears                                                        |
| Visitors                           | Enter number of visitors                    | Number of visitors is entered                | Yes    | Yes    | If uder does'nt enter number of visistors, the error message appears                                                  |
| Email input                        | Enter the email                             | The email is entered                         | Yes    | Yes    | If user doesn't enter the email, the error message appears. If user enters not valid email, the error message appears |
| Phone Number                       | Enter the phone number                      | The phone number is entered                  | Yes    | Yes    | If user doesn't enter the phone number, the error message appears                                                     |
| "Reset" button                     | Click on the "Reset" button                 | The entered form values resets               | Yes    | Yes    | -                                                                                                                     |
| "Submit" button                    | Click on the "Submit" button                | The user is redirected to the thank you page | Yes    | Yes    | -                                                                                                                     |
| Thank you page                     |                                             |                                              |        |        |                                                                                                                       |
| Response message                   | The user will presented a thank you message | The user is presented a thank you message    | Yes    | Yes    | -                                                                                                                     |

### Bugs

1. Low contrast between primary font color Sandy Brow and blue background

2. Loading time issue due to Hero and main images on home page and booking page unnecessarily heavy.

- ##### Solved bugs

  1.Background color was changed to a darker nuance.

  2. Optimized images for better performance.

  ***

- ##### Unsolved bugs
  - None.
- ##### Mistakes

  - My early commits where not posted with standard wording and not covering all essential changes.

  - I updated the hamburger symbol and menu with animations after I already recorded the gif screensaves for the Readme. Hence the gifs showing the page responsiveness does not have all the latest updatetes.

---

## Validator testing

- ### HTML

  #### Home Page

  - No errors or warnings were found when passing through the official W3C validator.

  ![Home Page HTML Validator](documentation/w3-validator-home-page.png)

  #### Gallery Page

  - No errors or warnings were found when passing through the official W3C validator.

  ![Gallery Page HTML Validator](documentation/w3-validator-gallery-page.png)

  #### Booking Page

  - No errors or warnings were found when passing through the official W3C validator.

  ![Contact Page HTML Validator](documentation/w3-validator-booking-page.png)

  #### Thank You Page

  - No errors or warnings were found when passing through the official W3C validator.

  ![Response Page HTML Validator](documentation/w3-validator-thank-you-page.png)

- ### CSS

  No errors or warnings were found when passing through the official W3C (Jigsaw) validator except:
  ![CSS Validator](documentation/w3-validator-css.png)

  - 8 warnings regarding the use of _:root variables_: "Due to their dynamic nature, CSS variables are currently not statically checked".

  ![CSS Validator errors](documentation/w3-validator-css-warnings.png)

  - ### Accessibility and performance
    - Using lighthouse in devtools I confirmed that the website is performing well, accessible and colors and fonts chosen are readable.

  #### Home page

  ![Home Page Lighthouse](documentation/lighthouse-home-page.png)

  #### Gallery page

  ![Gallery Page Lighthouse](documentation/lighthouse-gallery-page.png)

  #### Contact page

  ![Booking Page Lighthouse](documentation/lighthouse-booking-page.png)

  #### Thank You page

  ![Thank You Page Lighthouse](documentation/lighthouse-thank-you-page.png)

---

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the [GitHub repository](https://github.com/joahnplar/connect-4), navigate to the Settings tab
  - From the source section drop-down menu, select the **Main** Branch, then click "Save".
  - The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://johanplar.github.io/villa-solhem)

## Local Deployment

In order to make a local copy of this project, you can clone it.
In your IDE Terminal, type the following command to clone my repository:

- `git clone https://github.com/johanplar/villa-solhem.git`

- Alternatively, if you use Gitpod, you can [click here](https://gitpod.io/#https://github.com/johanplar/villa-solhem), which will start the Gitpod workspace for you.

## Future improvements

- image carousel showing photos of the different rooms of the house to rent.
- improve the quality of the commit messages. I am aware that I missed to point out some changes that along the way that could be useful.
- add function to check availability straight away before user sends the filled input form.
- add price-information.
- add custom 404 page;

- #### Content

  - Inspiration for the gallery [LogRocket Ibadehin Mojeed](https://blog.logrocket.com/responsive-image-gallery-css-flexbox/).

  - Inspiration for the responsive hamburger navbar came from [Kevin Powell](https://www.youtube.com/user/KepowOb) on his YouTube channel.

- #### Media

  - [Hero image and Main Section image on homepage](Private photo: Johan Plym Arkert);

  - Google Fonts

- #### Tools

  - [EzGif](https://ezgif.com) was used to resize GIF images.
  - [cooler](https://coolors.co/) was used to create the color palette.
  - [mockupGen](https://websitemockupgenerator.com/) was used for responsive mockup png.
  - [image optimizer](http://www.imageoptimizer.net/) was used to resize images.

## Acknowledgments

- [Code Institute](https://codeinstitute.net/) For the Code Institute course material in html and CSS and for the Slack community members for their support and help.
- [Kevin Powell](https://www.youtube.com/user/KepowOb) for his CSS tutorials in general and more specifically for the hamburger code.
- [Aleksei Konovalov](https://github.com/lexach91) my Code Institue tutor who inspired me to push myself further.
