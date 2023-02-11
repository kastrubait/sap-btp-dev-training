sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zlab/zlabauthot/test/integration/FirstJourney',
		'zlab/zlabauthot/test/integration/pages/AuthorsList',
		'zlab/zlabauthot/test/integration/pages/AuthorsObjectPage'
    ],
    function(JourneyRunner, opaJourney, AuthorsList, AuthorsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zlab/zlabauthot') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAuthorsList: AuthorsList,
					onTheAuthorsObjectPage: AuthorsObjectPage
                }
            },
            opaJourney.run
        );
    }
);