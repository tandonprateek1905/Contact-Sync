     
     
//-----------------------------------------------------------------
// Replace the values below with your own app configuration values.
//-----------------------------------------------------------------

// When debugMode is true, logToConsole() messages will be written to a
// "debug console" section of the page.
var debugMode = true;

// The client ID value specified for your remote access object that defines
// your application in Salesforce.
var remoteAccessConsumerKey = "3MVG9Y6d_Btp4xp6jdIFNBhr1fRDbXr4u6Ce1PJEy82ww1Sd4YaPcbPdZkeKB3GfxLIt2pJO4wkBNoa.tGwDS";

// The redirect URI value specified for your remote access object that defines
// your application in Salesforce.
var oauthRedirectURI = "sfdc://success";

// The authorization/access scope(s) you wish to define for your application.
var oauthScopes = ["api"];

//The start data associated with the application.  Use SFHybridApp.LocalAppStartData for a "local"
//PhoneGap-based application, and SFHybridApp.RemoteAppStartData for a Visualforce-based
//application.  The default representations are below, or you can look at the data
//classes in SFHybridApp.js to see how you can further customize your options.
var startData = new SFHybridApp.LocalAppStartData();  // Used for local REST-based "index.html" PhoneGap apps.
//var startData = new SFHybridApp.RemoteAppStartData("/apex/BasicVFPage"); // Used for Visualforce-based apps.


// Whether the container app should automatically refresh our oauth session on app foreground:
// generally a good idea for Visualforce pages.  For REST-based apps we recommend using
// onAppResume to refresh if needed.
var autoRefreshOnForeground = false; //Use true for Visualforce-based apps
    
// Whether the container app should automatically refresh our oauth session periodically
var autoRefreshPeriodically = true; 
    
//-----------------------------------------------------------------
// End configuration block
//-----------------------------------------------------------------
        
            

