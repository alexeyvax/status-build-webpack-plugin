/* use default value */
new ShowStatusBuild()

/* ************************************ */

/* use custom colors */
new ShowStatusBuild({
  colors: {
    success: 'yellow',
    failed: 'cyan',
  }
})

/* ************************************ */

/* use custom text when build is passed */
new ShowStatusBuild({
  success: 'My build is passed!'
})

/* ************************************ */

/* use custom image when build is passed */
const heart = `
                       ♥  ♥           ♥  ♥
                     ♥       ♥     ♥       ♥
                   ♥            ♥            ♥
                  ♥                           ♥
                   ♥          BUILD          ♥
                    ♥                       ♥
                      ♥       PASSED      ♥
                        ♥               ♥
                          ♥           ♥
                            ♥       ♥
                              ♥   ♥
                                ♥
`;

new ShowStatusBuild({
  success: heart
})

/* ************************************ */

/* use custom text when build is failed */
new ShowStatusBuild({
  failed: 'Oops, my build is failed!'
})

/* ************************************ */

/* use custom image when build is failed */
const brokenHeart = `
                       ♥  ♥           ♥  ♥
                     ♥       ♥     ♥       ♥
                   ♥          ♥   ♥          ♥
                  ♥            ♥  ♥           ♥
                   ♥   BUILD  ♥  ♥   FAILED  ♥
                    ♥          ♥  ♥         ♥
                      ♥         ♥  ♥      ♥
                        ♥      ♥  ♥     ♥
                          ♥   ♥  ♥    ♥
                            ♥  ♥  ♥ ♥
                              ♥   ♥
                                ♥
`;

new ShowStatusBuild({
  failed: brokenHeart,
})

/* ************************************ */

/* show error numbers when build is failed */
new ShowStatusBuild({
  showErrorsNumber: true,
})
