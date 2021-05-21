class WebOneSignal {

    /**
     * Globally define OneSignal.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#init
     */
    static defineOneSignal() {
        var OneSignal = OneSignal || [];
    }
    
    /**
     * Initialize OneSignal.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#init
     * 
     * @param {string} appId 
     * @param {string} safari_web_id 
     * @returns {boolean}
     */
    static initOneSignal(appId, safari_web_id) {
        // Returns if the current browser environment viewing the page does not support push notifications.

        if (OneSignal.isPushNotificationsSupported() === false) {
            return false;
        }
    
        // Verify one signal had been initialised.
    
        if (OneSignal.initialized === true) return true;

        const initConfig = {
            appId: appId,
            safari_web_id: safari_web_id,
            notificationClickHandlerMatch: "origin",
            notificationClickHandlerAction: "focus",
            allowLocalhostAsSecureOrigin: true,
        };

        OneSignal.push(function () {
            OneSignal.SERVICE_WORKER_PARAM = { scope: '/services/one_signal/' };
            OneSignal.SERVICE_WORKER_PATH = 'services/one_signal/OneSignalSDKWorker.js'
            OneSignal.SERVICE_WORKER_UPDATER_PATH = 'services/one_signal/OneSignalSDKUpdaterWorker.js'
            OneSignal.init(initConfig);
        });

        return true;
    }
    
    /**
     * Note: This method Not supported on Safari.
     * 
     * Note: This event occurs once only.
     * 
     * @addListenerForNotificationOpened callback will execute when the notification's body/title
     * or action buttons are clicked.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#addlistenerfornotificationopened
     */
    static handleOnNotificationOpened() {
        OneSignal.push(["addListenerForNotificationOpened", function(event) {
            WebOneSignal.handleOnNotificationOpened();
    
            // Method from dart OneSignalJS.
    
            hms_onNotificationOpened(JSON.stringify(event));
        }]);
    }
    
    /**
     * Event occurs after a notification is visibly displayed on the user's screen.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#notification-display
     */
    static handleOnNotificationReceived() {
        OneSignal.on('notificationDisplay', function(event) {
            // Method from dart OneSignalJS.
    
            hms_onNotificationReceived(JSON.stringify(event));
        });
    }

    /**
     * Returns true if the current browser environment viewing the page supports push notifications.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#ispushnotificationssupported
     * 
     * @returns {boolean}
     */
    static getIsPushNotificationsSupported() {
        return OneSignal.isPushNotificationsSupported();
    }
    
    /**
     * Describes whether the user is subscribed to push notifications.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#ispushnotificationsenabled
     * 
     * @returns {Promise<boolean>}
     */
     static getIsPushNotificationEnabled() {
        return OneSignal.isPushNotificationsEnabled();
    }
    
    /**
     * Get the OneSignal Player ID of the device's Push Record.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#getuserid
     * 
     * @returns {Promise<string>}
     */
    static getPlayerId() {
        return OneSignal.getUserId();
    }
    
    /**
     * Typically used to perform an action after the user is fully subscribed. 
     * Also fires when the user unsubscribes.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#subscription-change
     */
    static handleOnNotificationSubscriptionChanged() {
        OneSignal.on('subscriptionChange', function() {
           // Methods from dart OneSignalJS.

            hms_onSubscriptionChanged();          
        });
    }

    /**
     * This event does NOT mean the user is fully subscribed.
     * 
     * This event tracks the browser's native permission being changed.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#notificationpermissionchange
     */
     static handleOnNotificationPermissionChanged() {
        OneSignal.on('notificationPermissionChange', function() {
            // Methods from dart OneSignalJS.

            hms_onPermissionChanged();
        });
    }

    /**
     * Prompt users with Native Browser Prompt to subscribe to web push notifications.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#shownativeprompt
     */
    static showNativePrompt() {
        OneSignal.showNativePrompt();
    }

    /**
     * This function lets a site mute or unmutes notifications for the current user and not
     * related to actually prompting the user to subscribe.
     *
     * The user must already be subscribed for this function to have any effect.
     * 
     * Reference: https://documentation.onesignal.com/docs/web-push-sdk#setsubscription
     * 
     * @param {boolean} condition
     */
    static setMuteNotification(condition) {
        OneSignal.setSubscription(condition);
    }

    /**
     * A function that will be called when the browser's current notification permission
     * has been obtained, with one of 'default', 'granted', or 'denied'.
     * @returns {string}
     */
    static getNotificationPermissionStatus() {
        // Not using OneSignal get permission status function, because it return default when browser permission 
        // already set to block.

        // return OneSignal.getNotificationPermission();

        // Use browser's built in Notification API to get permission status.
        // For browser support version refer to : https://caniuse.com/notifications.

        return Notification?.permission ?? 'unsupported';
    }
}

window.WebOneSignal = WebOneSignal;