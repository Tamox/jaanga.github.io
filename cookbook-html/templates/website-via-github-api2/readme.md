<span style=display:none; >[You are now in a GitHub source code view - click this link to view Read Me file as a web page]
( https://jaanga.github.io/cookbook-html/templates/website-via-github-api/#readme.md "View file as a web page." ) </span>
<input type=button onclick=window.location.href='https://github.com/jaanga/jaanga.github.io/tree/master/cookbook-html/templates/website-via-github-api/'; 
value='You are now in a GitHub web page view - Click this button to view this read me file as source code' >


[WebSite via GitHubAPI Read Me]( https://jaanga.github.io/cookbook-html/templates/website-via-github-api/website-via-github-api-r1.html#readme.md )
===

## [github-api-files-in-folder]( https://jaanga.github.io/cookbook-html/templates/website-via-github-api/ )


## Concept

GitHub repositories may contain hundreds of script files and supporting pages of content.

Finding out what is inside a repository can become a long and tedious process.

GitHub enables inspection and hosting via its GitHub pages feature

Making this work available as web pages can take time and effort away from programming and documenting.

The GitHub tools for setting up a content management system (CMS) require the use and knowledge of Ruby.

Setting up a remote server to set up a content management system for GitHub files takes time, effort and money.

Therefore:

A possible alternative is to have a client-side JavaScript app to act as a CMS


### Mission

* Provide a simple client-side content management system for files in a gh-pages branch of a GitHub repository
* Written for non-programmers, non-designers - who want to code
* Write once. Read many
* Always a work-in-progress
* Always a bit more simple than it could be
	* It's easier to recover from no abstraction than the wrong abstraction

 

### Vision 

* Your coding process is auto-magically also your marketing process


## Features


* Request details of all files in a gh-pages branch of a GitHub repository.
* Create a file explorer with menu. 
* Enable browsing and viewing of selected files.
* Menu has breadcrumbs and other useful links. 
* Lists tagged issues in right side menu
* Short, easy code
	* About 300 lines of mostly air
* Single dependency on ShowDown - a MarkDown interpreter



## To Do

* 2016-08-16 ~ Setup ladybug as a project?
* 2016-08-16 ~ Custom center panel
	* repos as 'pinterest' blocks
	* Three most recent repos highlighted
	* Show the code
* Add pop-ups?
* Add view all files
* View file details from SHA
* Open page in new tab does what it says
* Build files object
	* Tracks files sizes
	* Tracks SHA
	* Tracks is a dir - so can display http://www.fileformat.info/info/unicode/char/1f4c1/browsertest.htm - 📁


## Issues

* 2016-08-04 ~ Add better menu display handling if n0 subfolders 
* 2016-08-04 ~ Breadcrumbs and files menu display/style still not totally clear
* 2016-08-03 ~ Errors reporting when certain scripts in readme iframes




## Change log

### 2016-09-21 ~ Website via GitHub API2 R1

* Many changes
* Now built on the core name space idea


### 2016-08-16 ~ Website via GitHub API R1

* 2016-08-13 ~ recent events in left column
* 2016-08-13 ~ right menu issue title as link to issue
* 2016-08-13 ~ stats as separate - reusable  - details
* Recognizes file names in location.hash


### 2016-08-12 R8

* Add right side menu
* Creates table of contents with the links you actually want
* Code cleanup


### 2016-08-04 R6

* Add limited ability to display file with name supplied by location.hash
* Add link to here in about menu
* Change style of contents div
* Tweak breadcrumbs
* Add folder icon
* Add to these notes
* Update base HTML file metadata
* Many changes

### 2016-07-28 R1...

So much fun!

Just create and the menuing system and read me files take care of themselves.
Well, that's the goal anyway


* Follows on from several days of playing with different formats and naming styles

