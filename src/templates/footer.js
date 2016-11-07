/*
  Public component footer
*/

module.exports = function(data, glbData, name, langs, config) {
  /* data is for each page specifically */
  /* glbData is for the public partial, like menus on header */
  /* name is specifically for the name of each page */
  /* langs is an object that contains all the languages the current page supports */
  /* config is the data from the global configuration */
  var langText = config.languageText;
  var selectLangs = '';
  for(var lang in langs) {
    selectLangs += '<li><a class="footer-lang" href="/'+ lang +'/'+ name + '/">'+ langText[lang] +'</a></li>'
  };
  var footer = [
    '<div class="global-footer" id="Footer">',
      '<p class="copyright">' + glbData.footer.copyright + '</p>',
      '<ul class="lang-list" id="LangsList">' + selectLangs + '</ul>',
    '</div><!-- #Footer -->',
    '</div><!-- #Wrapper -->',
    '</body>',
    '</html>'
  ].join('\n');
  return footer;
};

/*
  The 'ul#LangsList' contains the urls for every language the current page supports.
  It is not required, just for switching to different language for the same page.
*/
