# WKND Muzik Site Project

This is lean code using AEM Core Component:

## How to Setup 
	Install AEM6.5 with 6.5.6.0 service pack.
	Install Core component package "core.wcm.components.all-2.11.1.zip"
	Login to AEM and got to http://yourhost/system/console/configMgr
	Open Day CQ Link Checker Transformer and Tick "Disable Checking" Checkbox

## How to deploy code


Run following command to deploy it to a Author instance

    mvn clean install -PautoInstallPackage
	
	or
	
	mvn clean install -PautoInstallSinglePackage

   
Run following command to deploy it to a publish instance

    mvn clean install -PautoInstallPackagePublish
	
    or
	
	mvn clean install -PautoInstallSinglePackagePublish
	
	
## 	Component and Templates 
    The Entire site is developed using AEM Core Component and there is no Modification in the HTML, Sigtly templates and Design Dialogs.
	
	List of Components used to build the Website are
	1	Accordion
	2	Breadcrumb
	3	Button
	4	Carousel
	5	Container
	6	Embed
	7	Experience Fragment
	8	Form Button
	9	Form Container
	10	Form Options
	11	Form Text
	12	Image
	13	Language Navigation
	14	Layout Container
	15	Navigation
	16	Search 
	17	Separator
	18	Tabs
	19	Teaser
	20	Title
	
	Template used 
	
	There is only one template used named "Content Page"
	List of Pages Created - All Pages in the Navigation have been created But active pages are as per the shared Design
	1 Home
	2 Membership
	3 Sign In with email functionality and confirmation page
    4 Faq 
	5 Customer Service	
	
	
## 	Email Configuration 	
	We used the out of box email configuration for sending an email for Membership sign up page. 
    Login to AEM and got to http://yourhost/system/console/configMgr
	Open "Day CQ Mail Service" and Configure the SMTP details:
	
